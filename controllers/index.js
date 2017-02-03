var express = require('express');
var router = express.Router();
var path = require('path');

// router.use('/api/launches', require('./launches_controller.js'));

router.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/../client/build/main.html'));
});

module.exports = router;