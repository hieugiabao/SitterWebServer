const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Parent = require("./Parent");
const Sitter = require("./Sitter");
const Feedback = require("./Feedback");

const Request = sequelize.define(
  "Request",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

Request.belongsTo(Parent, { foreignKey: "parent_id" });
Request.belongsTo(Sitter, { foreignKey: "sitter_id" });
Request.belongsTo(Feedback, { foreignKey: "feedback_id" });

module.exports = Request;
