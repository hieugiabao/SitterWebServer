const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Account = require("./account");

const gender = ["male", "female"];
const status = ["accepted", "not accept"];

const Sitter = sequelize.define(
  "Sitter",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    sitter_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM(...gender),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(255),
    },
    certification: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    year_ex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hourly_salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM(...status),
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
    food: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Sitter.belongsTo(Account, { foreignKey: "id" });

module.exports = Sitter;
