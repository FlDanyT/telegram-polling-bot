const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true, },
    chatId: {type: DataTypes.STRING, unique: true},

    OneOne: {type: DataTypes.INTEGER, defaultValue: 0},
    OneTwo: {type: DataTypes.INTEGER, defaultValue: 0},
    OneThree: {type: DataTypes.INTEGER, defaultValue: 0},

    TwoOne: {type: DataTypes.INTEGER, defaultValue: 0},
    TwoTwo: {type: DataTypes.INTEGER, defaultValue: 0},

    ThreeOne: {type: DataTypes.INTEGER, defaultValue: 0},
    ThreeTwo: {type: DataTypes.INTEGER, defaultValue: 0},
    ThreeThree: {type: DataTypes.INTEGER, defaultValue: 0},
    ThreeFour: {type: DataTypes.INTEGER, defaultValue: 0},

})

module.exports = User;
