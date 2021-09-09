const config = require('../../config.json');

module.exports = function(sequelize, DataTypes) {
    const character = sequelize.define('character', {
        guid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        race: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        class: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        xp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalTime: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        logout_time: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        online: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        zone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalKills: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalHonorPoints: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        todayKills: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        yesterdayKills: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'characters'
    });
    return character;
}