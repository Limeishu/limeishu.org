const app         = new (require('koa'))()
const path        = require('path')
const hAF         = require('koa2-connect-history-api-fallback')
const prerender   = require('koa-prerender')
const config      = require('./config.json')

app.use(hAF())
app.use(require('koa-static')(path.join(__dirname, '/../dist/')))
app.use(prerender())
app.listen(config.port)
console.log(`Start server on port ${config.port}.`)
