const express = require('express');
const router = express.Router();


const server2API = require('./test2');

router.use('/', server2API);

module.exports = router;