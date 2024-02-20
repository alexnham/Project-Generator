const express = require('express');
const { runPrompt } = require('./GPT/useGPT');
const router = express.Router();

router.get('/Hard', (req, res) => runPrompt(req, res, difficulty = 'hard'));
router.get('/Medium', (req, res) => runPrompt(req, res, difficulty = 'medium'));
router.get('/Easy', (req, res) => runPrompt(req, res, difficulty = 'easy'));


module.exports = router;