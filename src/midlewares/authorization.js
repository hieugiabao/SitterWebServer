const jwt = require('jsonwebtoken');
const Account = require('../models/Account');
require('dotenv').config();
module.exports = () => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            const account = await Account.findOne({
              where: { id: decoded.id },
            });
            if (!account) {
                return res.status(401).json({message: 'Unauthorized'});
            }
            req.userData = account;
            next();
        } catch (error) {
            return res.status(401).json({message: 'Unauthorized'});
        }
    }
}