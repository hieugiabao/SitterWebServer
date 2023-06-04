const accountController = require('../controllers/AccountController');

function route(app) {
    app.post('/signup', accountController.signup);

}

module.exports = route;