const { Op } = require("sequelize");
const Sitter = require("../models/sitter");

const searchSitters = async (req, res) => {
  try {
    console.log(req.query);
    const sex = req.query.sex ? req.query.sex : null;
    const minRate = req.query.minRate ? req.query.minRate : null;
    const maxRate = req.query.maxRate ? req.query.maxRate : null;
    const certifications = req.query.certification
      ? req.query.certification.split(",")
      : null;
    const minYearEx = req.query.minYearEx ? req.query.minYearEx : null;
    const maxYearEx = req.query.maxYearEx ? req.query.maxYearEx : null;
    const languages = req.query.language ? req.query.language.split(",") : null;

    // Xây dựng các tiêu chí tìm kiếm
    const criteria = {};

    // Danh sách chuyên môn
    console.log(certifications);
    if (certifications && certifications.length > 0) {
      criteria.certification = {
        [Op.or]: certifications.map((certification) => ({
          [Op.like]: `%${certification}%`,
        })),
      };
    }

    // Khoảng rating
    if (minRate && maxRate) {
      criteria.rate = {
        [Op.between]: [minRate, maxRate],
      };
    } else if (minRate) {
      criteria.rate = {
        [Op.gte]: minRate,
      };
    } else if (maxRate) {
      criteria.rate = {
        [Op.lte]: maxRate,
      };
    }

    // Giới tính
    if (sex) {
      criteria.sex = sex;
    }

    // Danh sách ngôn ngữ
    if (languages && languages.length > 0) {
      criteria.language = {
        [Op.or]: languages.map((language) => ({ [Op.like]: `%${language}%` })),
      };
    }

    // Khoảng số năm kinh nghiệm
    // Khoảng rating
    if (minYearEx && maxYearEx) {
      criteria.rate = {
        [Op.between]: [minYearEx, maxYearEx],
      };
    } else if (minYearEx) {
      criteria.rate = {
        [Op.gte]: minYearEx,
      };
    } else if (maxYearEx) {
      criteria.rate = {
        [Op.lte]: maxYearEx,
      };
    }
    // Tìm kiếm các sitter theo tiêu chí
    const sitters = await Sitter.findAll({ where: criteria });
    return res.json(sitters);
  } catch (error) {
    console.log("Error searching sitters:", error);
    throw error;
  }
};

module.exports = searchSitters;
