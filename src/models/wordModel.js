const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  topics: {
    type: Map,
    of: [String]
  },
}, {strict: false});

const Word = mongoose.model('Word', wordSchema, 'WordTopics')

module.exports = Word;
