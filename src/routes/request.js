const express = require('express');
const router = express.Router();
const requestController = require('../controllers/RequestController');

router.get('/requests', requestController.allRequests);
router.get('/request/:requestId', requestController.findRequestById);
router.post('/request/create-request', requestController.createRequest);
router.put('/request/:requestId', requestController.updateRequest);
router.delete('/request/:requestId', requestController.deleteRequest);

module.exports = router;