const express           = require('express')
const cors              = require('cors')

const News              = require('../db').News
const route             = express.Router()

route.route('/')
  .get(cors(), (req, res) => {
    News.find({}, (err, doc) => {
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
    let newNews = new News({
      title: req.body.title,
      content: req.body.content,
      date: new Date(),
      meta: req.body.meta
    })
    newNews.save((err, doc) => {
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
    News.findOne({
      _id: req.params.pid
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
    News.findOne({
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
        News.update({
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
    News.remove({ _id: req.params.pid }, (err) => {
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
