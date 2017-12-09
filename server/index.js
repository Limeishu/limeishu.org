const express           = require('express')
const bodyParser        = require('body-parser')

const app               = express()
const config            = require('./config.json')
const route             = require('./route')
const port              = config.port

app.use(bodyParser.json())
app.use(route)

app.listen(port)
console.log(`Start server on port ${port}.`)
