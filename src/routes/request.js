const express = require('express');
const router = express.Router();
const requestController = require('../controllers/RequestController');
const checkSitter = require('../midlewares/checkSitter.js');
const checkParent = require('../midlewares/checkParent');

router.get('/sitter', checkSitter, requestController.sitterRequestList);
router.get('/parent', checkParent, requestController.parentRequestList);
router.put('/sitter/:requestId', checkSitter, requestController.sitterUpdateState);
router.put('/parent/:requestId', checkParent, requestController.parentUpdateState);

// router.get('/', requestController.allRequests);
router.get('/:requestId', requestController.findRequestById);
router.post('/create-request', checkParent, requestController.createRequest);
router.put('/:requestId', requestController.updateRequest);
router.delete('/:requestId', checkParent, requestController.deleteRequest);



module.exports = router;