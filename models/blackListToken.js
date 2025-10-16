const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BlackListToken = sequelize.define('BlackListToken', {
    token: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    tableName: 'black_list_token',
    timestamps: true
});

module.exports = BlackListToken;