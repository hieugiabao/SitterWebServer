const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = () => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded);
            req.userData = decoded;
            next();
        } catch (error) {
            req.userData = { };
            next()
        }
    }
}