const searchController = require('../controllers/SearchController');
const account = require('./account');
const sitter = require('./sitter');

function route(app) {
    app.use('/account', account);
    app.get('/searchSitter', searchController);
    app.use('/', sitter);

}

module.exports = route;