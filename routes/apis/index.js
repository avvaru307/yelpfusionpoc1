const express = require('express');
const businessesApiController = require('./v1');
let router = express.Router();
router.use('/v1', businessesApiController);
module.exports = router;