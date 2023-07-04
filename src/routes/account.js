const express = require('express');
const router = express.Router();
const accountController = require('../controllers/AccountController');
const authorization = require('../midlewares/authorization')

router.post('/signUp', accountController.signUp);
router.post('/signIn', accountController.signIn);
router.get('/me', authorization(), accountController.getMeInfo);
router.post('/parent/update', authorization(), accountController.parentUpdateInfo);
router.post('/sitter/update', authorization(), accountController.sitterUpdateInfo);

module.exports = router;