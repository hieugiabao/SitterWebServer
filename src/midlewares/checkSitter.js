const Sitter = require("../models/Sitter");

module.exports = async (req, res, next) => {
  try {
    if (req.userData.role !== "sitter") {
      return res.status(403).json({ message: "Forbidden" });
    }
    const id = req.userData.id;
    const sitter = await Sitter.findByPk(id);
    if (!sitter) {
      return res.status(404).json({ message: "Sitter not found" });
    }
    req.sitter = sitter;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
