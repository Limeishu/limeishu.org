const express = require('express')

const User = require('../db').User
const route = express.Router()

route.route('/')
  .post((req, res) => {
    let account = new User({
      user: req.body.username,
      pwd: req.body.password,
      permission: 2
    })
    User.findOne(account, (err, doc) => {
      switch (true) {
        case err:
          res.json({
            result: -1,
            err
          })
          break
        default:
          res.json({
            result: 0,
            uid: doc._id
          })
      }
    })
  })
  .put((req, res) => {
    let account = new User({
      user: req.body.username,
      pwd: req.body.password,
      permission: 2
    })
    User.findOne(account, (err, doc) => {
      switch (true) {
        case err:
          res.json({
            result: -1,
            err
          })
          break
        case !doc:
          res.json({
            result: -2
          })
          break
        default:
          User.update({ _id: req.body.uid }, {
            user: req.body.username ? req.body.username : doc.user,
            pwd: req.body.password ? req.body.password : doc.pwd,
            permission: req.body.permission ? req.body.permission : doc.permission,
            meta: req.body.meta ? req.body.meta : doc.meta
          }, err => {
            switch (true) {
              case err:
                res.json({
                  result: -3,
                  err
                })
                break
              default:
                res.json({
                  result: 0
                })
            }
          })
      }
    })
  })

route.route('/new')
  .post((req, res) => {
    let account = new User({
      user: req.body.username,
      pwd: req.body.password,
      permission: 2
    })
    account.save((err, doc) => {
      switch (true) {
        case err:
          res.json({
            result: -1,
            err
          })
          break
        default:
          res.json({
            result: 0,
            uid: doc._id
          })
      }
    })
  })

route.route('/:uid')
  .get((req, res) => {
    User.findOne({
      _id: req.parmas.uid
    }, (err, doc) => {
      switch (true) {
        case err:
          res.json({
            result: -1,
            err
          })
          break
        default:
          res.json({
            result: 0,
            uid: doc._id,
            user: doc.user,
            meta: doc.meta
          })
      }
    })
  })
