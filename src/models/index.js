const sequelize = require("../db");
const Account = require("../models/account");
const Parent = require("../models/parent");
const Sitter = require("../models/sitter");
const Feedback = require("../models/feedback");
const Request = require("../models/request");

// Đồng bộ hóa model với cơ sở dữ liệu
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.log("Error synchronizing database:", error);
  });
