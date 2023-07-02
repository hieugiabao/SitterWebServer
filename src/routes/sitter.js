const express = require('express');
const router = express.Router();
const sitterController = require('../controllers/SitterController');

router.get('/', sitterController.allSitters);
router.get('/names', sitterController.nameSitters);

module.exports = router;