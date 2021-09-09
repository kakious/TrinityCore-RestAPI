const config = require("../../config.json");
const dbConfig = require("../config/db.config")
const Sequelize = require("sequelize");
const authserver = new Sequelize(config.authDatabase.database, config.authDatabase.user, config.authDatabase.password, {
  host: config.authDatabase.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const worldServer = new Sequelize(config.realm.worldDatabase.database, config.realm.worldDatabase.user, config.realm.worldDatabase.password, {
  host: config.realm.worldDatabase.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const characterServer = new Sequelize(config.realm.characterDatabase.database, config.realm.characterDatabase.user, config.realm.characterDatabase.password, {
  host: config.realm.characterDatabase.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.authserver = authserver;
db.worldserver = worldServer;
db.characterserver = characterServer;

db.top = require("./character.js")(characterServer, Sequelize);

module.exports = db;