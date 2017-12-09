const express               = require('express')
const path                  = require('path')

const route                 = express.Router()

const { news, post, user }  = require('../model')

route.use(express.static(path.join(__dirname, '/../../dist')))
route.use('/api/user', user)
route.use('/api/post', post)
route.use('/api/news', news)

module.exports = route
