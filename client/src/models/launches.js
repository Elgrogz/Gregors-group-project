var Launch = require('./launch');
var launches;
var ourLaunchAPI = [];

var Launches = function() {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.launchDetails = [];
  this.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    self.populateLaunches(launches);
  });
  // console.log(ourLaunchAPI)
  return ourLaunchAPI;
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
    var self = this;
    for (var i = 0; i < populatedLaunches.length; i++) {
      var id = populatedLaunches[i].id;
      var url = 'https://launchlibrary.net/1.1/launch/'+ id;
      this.makeRequest(url, function() {
        if (this.status !==200) return;
        var jsonString = this.responseText;
        launchObject = JSON.parse(jsonString);
        self.launchDetails.push(launchObject);
        if(self.launchDetails.length === 10){
          self.makeLaunch()
        }
      });
    }

  },

  makeLaunch: function(){
    for (var launch of this.launchDetails){
          var position = {lat: "", lng: ""};
      position.lat = launch.launches[0].location.pads[0].latitude;
      position.lng =launch.launches[0].location.pads[0].longitude;
      var individualLaunch = new Launch(position);
        ourLaunchAPI.push(individualLaunch);
    } 
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