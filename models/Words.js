const mongoose = require('mongoose')

const WordsSchema = new mongoose.Schema({
  words: {
    type: Array,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Words', WordsSchema)
