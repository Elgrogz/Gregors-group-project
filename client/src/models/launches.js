var launches;
var launchDetails = [];

var Launches = function() {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    self.populateLaunches(launches);
  });
};

Launches.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = callback;
    request.send();
  },
  populateLaunches: function(rocketLaunch) {
    var populatedLaunches = rocketLaunch.launches;
    
    for (var i = 0; i < populatedLaunches.length; i++) {
      var id = populatedLaunches[i].id;
      var url = 'https://launchlibrary.net/1.1/launch/'+ id;
      this.makeRequest(url, function() {
        if (this.status !==200) return;
        var jsonString = this.responseText;
        launchObject = JSON.parse(jsonString);
        launchDetails.push(launchObject);
      });
    }
    // console.log(launchDetails);
    return launchDetails;
  }
    // all: function(callback) {
    //     var self = this;
    //     this.makeRequest('http://localhost:3000/api/launches', 'GET', function() {
    //         if (this.status !== 200) {
    //             return;
    //         }
    //         var jsonString = this.responseText;
    //         var results = JSON.parse(jsonString);

    //         var launches = self.populateLaunches(launches);
    //         callback(launches);
    //     });
    // }

}

module.exports = Launches;