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
  console.log("POSTing", req.body);
  var data = {
    name: req.body.name,
    date: req.body.date,
  };
  query.add(data, function(results) {
    res.json(results);
  });
});

router.get('/launches', function (req, res) {
  query.all(function(results) {
    res.json(results);
  });
});

// router.delete('/:id', function(req, res) {
//   console.log(res);
// });

//delete mission
router.delete('/launches/:name', function(req, res) {
  query.remove(req.params.name);
  query.all(function(results) {
    res.json(results);
  });
});


module.exports = router;