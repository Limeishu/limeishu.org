const app         = new (require('koa'))()
const send        = require('koa-send')
const path        = require('path')
const config      = require('./config.json')

app.use(require('koa-static')(path.join(__dirname, '/../dist/')))
app.use(async (ctx, next) => {
  await send(ctx, (path.join('/../dist/index.html')))
})
app.listen(config.port)
console.log(`Start server on port ${config.port}.`)
