const mongoose              = require('mongoose')
const mongooseUV            = require('mongoose-unique-validator')

const config                = require('../config.json')

const Schema                = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  meta: Object
}, {
  collection: 'Post'
})

postSchema.plugin(mongooseUV)

const db = {
  Post: mongoose.model('Post', postSchema)
}

mongoose.Promise = global.Promise
mongoose.connect(
  config.db.uri, {
    user: config.db.user,
    pwd: config.db.pwd,
    useMongoClient: true
  }
)

module.exports = db
