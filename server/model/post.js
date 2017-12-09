const express = require('express')

const Post = require('../db').Post
const route = express.Router()

route.route('/')
  .get((req, res) => {
    Post.find({}, (err, doc) => {
      switch (true) {
        case err || !doc:
          res.json({
            result: -1,
            err
          })
          break
        case doc:
          res.json({
            result: 0,
            data: doc
          })
          break
      }
    })
  })
  .post((req, res) => {
    let newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      date: new Date(),
      meta: req.body.meta
    })
    newPost.save((err, doc) => {
      switch (true) {
        case err:
          res.json({
            result: -1,
            err
          })
          break
        default:
          res.json({
            result: 0
          })
      }
    })
  })

route.route('/:pid')
  .get((req, res) => {
    Post.findOne({ _id: req.parmas.id }, (err, doc) => {
      switch (true) {
        case err || !doc:
          res.json({
            result: -1,
            err
          })
          break
        case doc:
          res.json({
            result: 0,
            doc
          })
          break
      }
    })
  })
  .put((req, res) => {
    Post.findOne({
      _id: req.parmas.pid
    }, (err, doc) => {
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
          Post.update({
            _id: req.parmas.pid
          }, {
            title: req.body.title ? req.body.title : doc.title,
            content: req.body.content ? req.body.content : doc.content,
            date: new Date(),
            meta: req.body.meta ? req.body.meta : doc.meta
          }, err => {
            switch (true) {
              case err:
                res.json({
                  result: -1,
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

module.exports = route
