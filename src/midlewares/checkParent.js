const Parent = require("../models/Parent");

module.exports = async (req, res, next) => {
  try {
    if (req.userData.role !== "parent") {
      return res.status(403).json({ message: "Forbidden" });
    }
    const id = req.userData.id;
    const parent = await Parent.findByPk(id);
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    req.parent = parent;
    return next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
