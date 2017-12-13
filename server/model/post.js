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
      _id: req.params.id
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
      _id: req.params.pid
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
          _id: req.params.pid
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
  .delete((req, res) => {
    Post.remove({ _id: req.params.pid }, (err) => {
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

module.exports = route
