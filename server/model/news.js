const express = require('express')

const News = require('../db').News
const route = express.Router()

route.route('/')
  .get((req, res) => {
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
  .get((req, res) => {
    News.findOne({
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
    News.findOne({
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
        News.update({
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
