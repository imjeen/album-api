# ALBUM

## Development

-   1. 启动数据库服务 : `docker-compose up -d`
-   2. 监听源码和启动服务进程： `npm run pm2-dev`，其实进行以下命令：
    -   监听源码： `npx tsc -w`
    -   启动服务进程： `npx pm2-dev ./dist/server.js`

## API

POST，创建相册：http://localhost:7000/album

```json
{
    "name": "aaa",
    "photos": [],
    "user": []
}
```

## TODO

- [ ] 变更接口命名空间: `/api/`
- [ ] 使用装饰器简化路由和控制器逻辑：routing-controllers
- [ ] TS 依赖包路径前缀名： module-alia
