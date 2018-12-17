import "reflect-metadata";

import * as Koa from 'koa';
import { useContainer, useKoaServer } from "routing-controllers";
import { Container } from "typedi";
import UserController from './controller/UserController';
import ArticleController from './controller/ArticleController';
import ArticleTypeController from './controller/ArticleTypeController';

useContainer(Container);

const app = new Koa();
useKoaServer(app, {
  routePrefix: "/my-blog",
  controllers: [
      UserController,
      ArticleController,
      ArticleTypeController
  ],
});

const port = 3000;
app.listen(port);
console.info(`Listening port: ${port}`);
