const express = require('express');
const router = express.Router();

const server1API = require('./test1');

router.use('/', server1API);

module.exports = router;