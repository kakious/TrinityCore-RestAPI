// Require the model
const db = require("../models");
const humanizeDuration = require("humanize-duration");
const wow = require('../modules/wow');

exports.getTopKills = async (req, res) => {
    try {
        var characters = await db.top.findAll({
            limit: 10,
            order: [['totalkills', 'DESC']]
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: `There was an issue talking to the database.`
        });
    }
    var result = [];
    var place = 1;
    characters.forEach(character => {
        character = character.dataValues;
        result.push({
            place: place,
            name: character.name,
            race: wow.getRace(character.race),
            class: wow.getClass(character.class),
            gender: wow.getGender(character.gender),
            level: character.level,
            totalKills: character.totalKills
        })
        place++;
    })
    res.json(result);
}

exports.getTopPlaytime = async (req, res) => {
    try {
        var characters = await db.top.findAll({
            limit: 10,
            order: [['totalTime', 'DESC']]
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: `There was an issue talking to the database.`
        });
    }
    var result = [];
    var place = 1;
    characters.forEach(character => {
        character = character.dataValues;
        result.push({
            place: place,
            name: character.name,
            race: wow.getRace(character.race),
            class: wow.getClass(character.class),
            gender: wow.getGender(character.gender),
            level: character.level,
            totalTime: humanizeDuration(`${character.totalTime}000`)
        });
        place++;
    });
    res.json(result);
}

exports.getTopHonor = async (req, res) => {
    try {
        var characters = await db.top.findAll({
            limit: 10,
            order: [['totalHonorPoints', 'DESC']]
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: `There was an issue talking to the database.`
        });
    }
    var result = [];
    var place = 1;
    characters.forEach(character => {
        character = character.dataValues;
        result.push({
            place: place,
            name: character.name,
            race: wow.getRace(character.race),
            class: wow.getClass(character.class),
            gender: wow.getGender(character.gender),
            level: character.level,
            honorPoints: character.totalHonorPoints
        });
        place++
    });
    res.send(result);
}

