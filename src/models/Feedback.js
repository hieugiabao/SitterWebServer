const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Parent = require("./Parent");
const Sitter = require("./Sitter");

const star = ["1", "2", "3", "4", "5"];

const Feedback = sequelize.define(
  "Feedback",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rate: {
      type: DataTypes.ENUM(...star),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Feedback.belongsTo(Parent, { foreignKey: "parent_id" });
Feedback.belongsTo(Sitter, { foreignKey: "sitter_id" });

module.exports = Feedback;
