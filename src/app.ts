import "reflect-metadata";
import * as Koa from 'koa';
import { useContainer, useKoaServer } from "routing-controllers";
import { Container } from "typedi";
import CategoryController from './backend/controller/CategoryController';
import ArticleController from './backend/controller/ArticleController';
import UserController from './backend/controller/UserController';
import {HttpJson} from "./util/HttpJson";
import {RetCodeEnum} from "./util/RetCodeEnum";
import mongooseService from './util/db';
const jwt = require('koa-jwt');

useContainer(Container);
const app = new Koa();
useKoaServer(app, {
  routePrefix: "/blog",
  controllers: [
      CategoryController,
      ArticleController,
      UserController
  ],
});

// 错误处理
app.use((ctx, next) => {
    return next().catch((err) => {
        if(err.status === 401){
            // ctx.status = 401;
            // ctx.body = 'Protected resource, use Authorization header to get access\n';
            ctx.response.status = 401;
            ctx.response.type = "application/json";
            ctx.response.body = new HttpJson("",RetCodeEnum.LOGIN_OUT,"你还没有登录，老哥");
        }else{
            throw err;
        }
    })
})
app.use(jwt({
    secret: '自定义吧'
}).unless({
    path: [
        /\/user\/login/
    ]
}));
mongooseService(app);
const port = 60000;
app.listen(port);
console.info(`Listening port: ${port}`);
