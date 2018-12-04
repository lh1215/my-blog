import "reflect-metadata";

import * as Koa from 'koa';
import { useContainer, useKoaServer } from "routing-controllers";
import { Container } from "typedi";
import UserController from './controller/UserController';

useContainer(Container);

const app = new Koa();
useKoaServer(app, {
  controllers: [
    UserController,
  ],
});

const port = 3000;
app.listen(port);
console.info(`Listening port: ${port}`);
