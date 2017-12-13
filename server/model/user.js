const express           = require('express')

const User              = require('../db').User
const route             = express.Router()

route.route('/')
  .post((req, res) => {
    let account = new User({
      user: req.body.username,
      pwd: req.body.password,
      permission: 2
    })
    User.findOne(account, (err, doc) => {
      if (err || !doc) {
        res.json({
          result: -1,
          err
        })
      } else {
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
      if (err) {
        res.json({
          result: -1,
          err
        })
      } else if (!doc) {
        res.json({
          result: -2
        })
      } else {
        User.update({
          _id: req.body.uid
        }, {
          user: req.body.username ? req.body.username : doc.user,
          pwd: req.body.password ? req.body.password : doc.pwd,
          permission: req.body.permission ? req.body.permission : doc.permission,
          meta: req.body.meta ? req.body.meta : doc.meta
        }, err => {
          if (err) {
            res.json({
              result: -3,
              err
            })
          } else {
            res.json({
              result: 0
            })
          }
        })
      }
    })
  })
  .delete((req, res) => {
    User.remove({ _id: req.body.uid }, (err) => {
      if (err) {
        res.json({
          result: -1,
          err
        })
      } else {
        res.json({ result: 0 })
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
      if (err || !doc) {
        res.json({
          result: -1,
          err
        })
      } else {
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
      _id: req.params.uid
    }, (err, doc) => {
      if (err || !doc) {
        res.json({
          result: -1,
          err
        })
      } else {
        res.json({
          result: 0,
          uid: doc._id,
          user: doc.user,
          meta: doc.meta
        })
      }
    })
  })

module.exports = route
