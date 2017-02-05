var Launch = require('./launch');
var launches;
var ourLaunchAPI = [];
// var arrayCounter = 0;

var Launches = function(map) {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.launchDetails = [];
  this.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    self.populateLaunches(launches, map);
  });
  return ourLaunchAPI;
};


Launches.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = callback;
    request.send();
  },
<<<<<<< HEAD
  populateLaunches: function(rocketLaunch, map) {
=======

  populateLaunches: function(rocketLaunch) {
>>>>>>> 23a2f07a65410dc174fda5397504c2bfd172c65c
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
          self.makeLaunch(map);
        }
      });
    }

  },

  makeLaunch: function(map){
    for (var launch of this.launchDetails){
      var position = {lat: "", lng: ""};
      position.lat = launch.launches[0].location.pads[0].latitude;
      position.lng =launch.launches[0].location.pads[0].longitude;

      var rocket = {rocketName: "", wikiURL: ""};
      rocket.rocketName = launch.launches[0].rocket.name;
      rocket.wikiURL = launch.launches[0].rocket.wikiURL;

      var mission = {missionDesc: ""};
         if (launch.launches[0].missions[0]) {
        mission.missionDesc = launch.launches[0].missions[0].description;
           } else {
            mission.missionDesc = "No mission data";
           }

      var individualLaunch = new Launch(position, rocket, mission);
        map.addMarker(individualLaunch.position, individualLaunch.mission.missionDesc);

        ourLaunchAPI.push(individualLaunch);
    }
  }
};



module.exports = Launches;