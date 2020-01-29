const express = require('express');
const businessService = require('../../services/businesses/business');
let router = express.Router();

router.get('/', businessService.getBusinesses);
router.get('/:id', businessService.getBusinessById);

module.exports = router;