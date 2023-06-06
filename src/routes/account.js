const express = require('express');
const router = express.Router();
const accountController = require('../controllers/AccountController');

router.post('/signUp', accountController.signUp);
router.post('/signIn', accountController.signIn);

module.exports = router;