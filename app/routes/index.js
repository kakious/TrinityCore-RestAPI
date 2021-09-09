var express = require('express');
var router = express.Router(); 
var config = require('../../config.json');
var version = require('../../package.json').version;
var wow = require('../modules/wow');

router.get('', async function (req, res) {
    var status = "DOWN";
    await wow.getServerStatus(config.realm.host, config.realm.port).then(function() {
        status = "UP";
    }, function(err) {
        status = "DOWN";
    })

    res.json({
        app: 'TrinityCore API',
        version: version,
        status: 'OK',
        trinityCore: {
            realm: config.realm.name,
            version: config.realm.version,
            status: status,
        }
    })
});

module.exports = router;
