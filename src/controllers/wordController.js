const Word = require('../models/wordModel');

class wordController {
  static async getWordsByTopic(req, res, next) {
    try {
      let { topic } = req.query;
      topic = decodeURIComponent(topic);
      const allWords = await Word.find({});
      const words = allWords[0].topics.get(topic);
      console.log(words, allWords)
      if (!words) {
        return res.status(404).json({ error: 'Topic not found' });
      }

      res.json({ words: words });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = wordController;
