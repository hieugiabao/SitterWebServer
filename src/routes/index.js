const searchController = require('../controllers/SearchController');
const account = require('./account');
const sitter = require('./sitter');
const request = require('./request');

function route(app) {
    app.use('/account', account);
    app.get('/searchSitter', searchController);
    app.use('/', sitter);
    app.use('/', request);

}

module.exports = route;