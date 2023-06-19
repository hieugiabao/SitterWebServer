const express = require('express');
const router = express.Router();
const sitterController = require('../controllers/SitterController');

router.get('/sitters', sitterController.allSitters);
router.get('/sitters/names', sitterController.nameSitters);

module.exports = router;