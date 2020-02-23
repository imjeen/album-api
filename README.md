# ALBUM API

It is a node server writen typescript with typeorm, routing-controllers and so on.

## Development

-   step 1 : start up MySQL server `docker-compose up -d`
-   step 2 : watch the sources `npm run pm2-dev`，( `npx tsc -w` and `npx pm2-dev ./dist/server.js`)

## TODO

-   [x] 变更接口命名空间: `/api/`
-   [x] 使用装饰器简化路由和控制器逻辑：routing-controllers
-   [ ] TS 依赖包路径前缀名： module-alia
