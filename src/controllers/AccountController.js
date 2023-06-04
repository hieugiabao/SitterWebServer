const accountRepository = require('../repositories/AccountRepository');

const signup = async (req, res) => {
    const result = await accountRepository.signup(req.body.username, req.body.password, req.body.role);
    res.json(result);
}

module.exports = {
    signup
}