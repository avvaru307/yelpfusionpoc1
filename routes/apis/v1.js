const businessController = require('../../controllers/apis/business');
const reviewsController = require('../../controllers/apis/reviews');

const express = require('express');
let router = express.Router();
router.use('/businesses', businessController);
router.use('/reviews', reviewsController);
module.exports = router;