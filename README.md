# ALBUM API

It is a node server writen typescript with typeorm, routing-controllers and so on.

## Development

- step 1 : start up MySQL server `docker-compose up -d`
- step 2 : watch the sources `npm run pm2-dev`，( `npx tsc -w` and `npx pm2-dev ./dist/server.js`)

## TODO

- [x] router prefix: `/api/`
- [x] [routing-controllers](https://www.npmjs.com/package/routing-controllers)
- [x] [module-alia](https://www.npmjs.com/package/module-alias)
- [ ] [typedi](https://www.npmjs.com/package/typedi)
