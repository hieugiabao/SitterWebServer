const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Account = require("./account");

const Parent = sequelize.define(
  "Parent",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    parent_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(255),
    },
    emergecy_phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Parent.belongsTo(Account, { foreignKey: "id" });

module.exports = Parent;
