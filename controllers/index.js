var express = require('express');
var router = express.Router();
var path = require('path');

// router.use('/api/launches', require('./launches_controller.js'));
var WatchlistQuery = require("../client/db/watchlistQuery.js");
var query = new WatchlistQuery();

router.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/../client/build/main.html'));
});

router.post('/', function (req, res) {
  var data = {
    name: req.body.missionName,
    date: req.body.launchTime
  };
  query.add(data);
  query.all(function(results) {
    res.json(results);
  });
});

module.exports = router;