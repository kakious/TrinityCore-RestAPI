var express = require('express');
var router = express.Router();
var character = require('../controllers/characters');

router.get('/:name', character.getCharacter);

module.exports = router;
