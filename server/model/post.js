const express           = require('express')
const cors              = require('cors')

const Post              = require('../db').Post
const route             = express.Router()

route.route('/')
  .get(cors(), (req, res) => {
    Post.find({}, (err, doc) => {
      if (err || !doc) {
        res.json({
          result: -1,
          err
        })
      } else {
        res.json({
          result: 0,
          doc
        })
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
      if (err || !doc) {
        res.json({
          result: -1,
          err
        })
      } else {
        res.json({
          result: 0,
          pid: doc._id
        })
      }
    })
  })

route.route('/:pid')
  .get(cors(), (req, res) => {
    Post.findOne({
      _id: req.parmas.id
    }, (err, doc) => {
      if (err || !doc) {
        res.json({
          result: -1,
          err
        })
      } else {
        res.json({
          result: 0,
          doc
        })
      }
    })
  })
  .put((req, res) => {
    Post.findOne({
      _id: req.parmas.pid
    }, (err, doc) => {
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
        Post.update({
          _id: req.parmas.pid
        }, {
          title: req.body.title ? req.body.title : doc.title,
          content: req.body.content ? req.body.content : doc.content,
          date: new Date(),
          meta: req.body.meta ? req.body.meta : doc.meta
        }, err => {
          if (err) {
            res.json({
              result: -1,
              err
            })
          } else {
            res.json({
              result: 0,
              pid: doc._id
            })
          }
        })
      }
    })
  })

module.exports = route
