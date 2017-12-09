const express               = require('express')
const path                  = require('path')

const route                 = express.Router()

route.use(express.static(path.join(__dirname, '/../../dist')))

module.exports = route
