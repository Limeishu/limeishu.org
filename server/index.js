const express           = require('express')
const bodyParser        = require('body-parser')

const app               = express()
const route             = require('./route')
const port              = 3000

app.use(bodyParser.json())
app.use(route)

app.listen(port)
console.log(`Start server on port ${port}.`)
