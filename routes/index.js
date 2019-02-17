const express = require('express');
const router = express();

router.use('/town', require('./town'));
router.use('/trainer', require('./trainer'));
router.use('/pokemon', require('./pokemon'));

module.exports = router;