const express = require('express');
const reviewService = require('../../services/reviews/reviews');
let router = express.Router();

router.get('/:id', reviewService.getReviewsforBusinessById);

module.exports = router;