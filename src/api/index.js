const express = require('express');
const router = express.Router();

module.exports = router;

router.use('/status',   require('./status'));
router.use('/',         require('./info'));
router.use('/*',        require('./catch-all'));
