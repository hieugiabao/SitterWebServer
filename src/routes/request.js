const express = require('express');
const router = express.Router();
const requestController = require('../controllers/RequestController');

router.get('/sitter', requestController.sitterRequestList);
router.get('/parent', requestController.parentRequestList);
router.put('/sitter/:requestId', requestController.sitterUpdateState);
router.put('/parent/:requestId', requestController.parentUpdateState);

router.get('/', requestController.allRequests);
router.get('/:requestId', requestController.findRequestById);
router.post('/create-request', requestController.createRequest);
router.put('/:requestId', requestController.updateRequest);
router.delete('/:requestId', requestController.deleteRequest);



module.exports = router;