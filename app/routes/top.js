var express = require('express');
const { route } = require('.');
var router = express.Router();
var top = require('../controllers/top');

router.get('/playtime', top.getTopPlaytime);

router.get('/kills', top.getTopKills);

router.get('/honor', top.getTopHonor);

module.exports = router;
