const db = require("../models");
const humanizeDuration = require("humanize-duration");
const wow = require('../modules/wow');


exports.getCharacter = async (req, res) => {
    var wowName = req.params.name;
    try {
        var character = await db.top.findOne({
            where: {
                name: wowName
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
    if (!character) {
        res.json({
            error: 'No player found'
        });
        return;
    } else {
        res.json({
            name: character.name,
            race: wow.getRace(character.race),
            class: wow.getClass(character.class),
            gender: wow.getGender(character.gender),
            level: character.level,
            online: character.online ? "Yes" : "No",
            zone: character.zone,
            money: wow.getMoney(character.money),
            totalTime: humanizeDuration(`${character.totalTime}000`)
        });
    }
}