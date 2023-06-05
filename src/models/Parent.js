const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Account = require('./account');

const Parent = sequelize.define('Parent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    parent_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING(25),
    },
    emergecy_phone: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
});

Parent.belongsTo(Account, { foreignKey: 'id' });

module.exports = Parent;
