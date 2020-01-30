const express = require('express');
const dashboardbusinessService = require('../../services/dashboard/businesses');
let router = express.Router();

router.get('/', dashboardbusinessService.getBusinessesWithReviews);

module.exports = router;