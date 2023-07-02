const searchController = require('../controllers/SearchController');
const account = require('./account');
const sitter = require('./sitter');
const request = require('./request');
const authorization = require('../midlewares/authorization')

function route(app) {
    app.use('/account', account);
    app.get('/searchSitter', searchController);
    app.use('/sitters', authorization(), sitter);
    app.use('/requests', authorization(), request);

}

module.exports = route;