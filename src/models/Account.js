const { DataTypes } = require("sequelize");
const sequelize = require("../db");

// Định nghĩa các kiểu dữ liệu enum
const roles = ["parent", "sitter", "admin"];

const Account = sequelize.define(
  "Account",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...roles),
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
    defaultScope: {
      attributes: {
        exclude: ["password"],
      }
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ["password"],
        }
      }
    }
  }
);

module.exports = Account;
