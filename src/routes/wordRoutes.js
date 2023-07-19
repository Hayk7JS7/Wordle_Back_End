const express = require('express');
const wordController = require('../controllers/wordController');
const router = express.Router();

router.get('/WordleWordsList', wordController.getWordsByTopic);

module.exports = router;
