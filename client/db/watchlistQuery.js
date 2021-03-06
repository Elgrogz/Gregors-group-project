var MongoClient = require('mongodb').MongoClient;

var WatchlistQuery = function() {
  this.url = "mongodb://localhost:27017/watchlist";
}

WatchlistQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection("launches");
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      })
    })
  },
  add: function(launchToAdd, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
      } else if (db) {
        var collection = db.collection("launches");
        collection.insert(launchToAdd);
        collection.find().toArray(function(err, docs) {
          onQueryFinished(docs);
       });
      }
    });
  },

  remove: function (launchToRemove, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
      } else if (db) {
        var collection = db.collection("launches");
        collection.remove({name: launchToRemove});
      }
    });
  }
}

module.exports = WatchlistQuery;