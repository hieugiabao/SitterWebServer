const Sitter = require('../models/Sitter');

const allSitters = async (req, res) => {
    try {

        const sitters = await Sitter.findAll();
        res.json(sitters);

    } catch (error) {
        console.log("Error searching sitters:", error);
        throw error;
    }
}

const nameSitters = async (req, res) => {
    try {
        const sitters = await Sitter.findAll({}); // Truyền một đối tượng rỗng {}

        const names = sitters.map((sitter) => sitter.sitter_name); // Lấy tên của các sitter

        res.status(200).json(names);

    } catch (error) {
        console.log("Error searching sitters:", error);
        throw error;
    }
}

module.exports = {
    nameSitters,
    allSitters
}
