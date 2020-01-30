const businessController = require('../../controllers/apis/business');
const reviewsController = require('../../controllers/apis/reviews');
const dashboardController = require('../../controllers/apis/dashboardBusiness');

const express = require('express');
let router = express.Router();
router.use('/businesses', businessController);
router.use('/dashboard/businesses', dashboardController);
router.use('/reviews', reviewsController);
module.exports = router;