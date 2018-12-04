# 博客 server

## 技术栈
- [koa](https://github.com/koajs/koa), web服务
- [routing-controllers](https://github.com/typestack/routing-controllers), REST路由配置
- [typedi](https://github.com/typestack/typedi), 依赖注入

## 代码分层结构
- controller, REST接口路由配置及输出相关
- dao, 数据库交互
- service, 服务接口调用及逻辑集成

## 启动
- `yarn`, 安装依赖
- `yarn dev`,  启动服务
