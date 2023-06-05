const searchController = require('../controllers/SearchController');

function route(app) {
    app.get('/searchSitter', searchController);

}

module.exports = route;