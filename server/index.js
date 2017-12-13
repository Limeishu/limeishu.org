const express           = require('express')
const bodyParser        = require('body-parser')
const cors              = require('cors')

const app               = express()
const config            = require('./config.json')
const route             = require('./route')
const port              = config.port
const corsOptions       = {
  'origin': '*',
  'methods': 'GET'
}

app.use(bodyParser.json())
app.use(route)
app.use(cors(corsOptions))

app.listen(port)
console.log(`Start server on port ${port}.`)
