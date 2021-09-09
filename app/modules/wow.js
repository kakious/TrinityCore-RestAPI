// Basic WoW Calculations to return strings.



module.exports = {
    // Get the race based on the ID from the databasea
    getRace: function(raceID) {
        switch (raceID) {
            case 1:
                return 'Human';
            case 2:
                return 'Orc';
            case 3:
                return 'Dwarf';
            case 4:
                return 'Night Elf';
            case 5:
                return 'Scourge';
            case 6:
                return 'Tauren';
            case 7:
                return 'Gnome';
            case 8:
                return 'Troll';
            case 9:
                return 'Goblin';
            case 10:
                return 'Blood Elf';
            case 11:
                return 'Draenei';
            default:
                return 'Unknown';
        }
    },

    // Get the gender based on the ID from the database
    getGender: function(genderID) {
        switch (genderID) {
            case 0:
                return 'Male';
            case 1:
                return 'Female';
        }
    },

    // Get the zone based on the ID from the database
    getZone: function(zoneID) {
        try {
            return zones[zoneID].name
        } catch {
            return "UNKNOWN"
        }
    },

    // Get the class based on the ID from the database
    getClass: function(classID) {
        switch (classID) {
            case 1:
                return 'Warrior';
            case 2:
                return 'Paladin';
            case 3:
                return 'Hunter';
            case 4:
                return 'Rogue';
            case 5:
                return 'Priest';
            case 6:
                return 'Death Knight';
            case 7:
                return 'Shaman';
            case 8:
                return 'Mage';
            case 9:
                return 'Warlock';
            case 10:
                return 'Monk';
            case 11:
                return 'Druid';
            case 12:
                return 'Demon Hunter';
            default:
                return 'Unknown';
        }
    },
    // See if the server is online
    getServerStatus: function(host, port, timeout) {
        var net = require('net');
        var Promise = require('bluebird');

        return new Promise(function(resolve, reject) {
            timeout = timeout || 10000;     // default of 10 seconds
            var timer = setTimeout(function() {
                reject("timeout");
                socket.destroy()
            }, timeout);
            var socket = net.createConnection(port, host, function() {
                clearTimeout(timer);
                resolve();
                socket.destroy()
            });
            socket.on('error', function(err) {
                clearTimeout(timer);
                reject(err);
            });
        });
    },
    getMoney: function(money) {
        var gold = Math.floor(money / 10000);
        var silver = Math.floor((money % 10000) / 100);
        var copper = Math.floor(money % 100);
        return gold + 'g ' + silver + 's ' + copper + 'c';
    }        
};