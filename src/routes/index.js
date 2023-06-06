const searchController = require('../controllers/SearchController');
const account = require('./account')
function route(app) {
    app.use('/account', account);
    app.get('/searchSitter', searchController);

}

module.exports = route;