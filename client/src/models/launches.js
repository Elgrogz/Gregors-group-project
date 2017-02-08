var Launch = require('./launch');
var ajax = require('./ajax');
var launches;
var ourLaunchAPI = [];
var launchTimes = [];
var nextLaunchTime;

var Launches = function(map) {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.launchDetails = [];
  ajax.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    self.populateLaunches(launches, map);
  });
  var launchAPI = ourLaunchAPI;

  return ourLaunchAPI;
};


Launches.prototype = {
  populateLaunches: function(rocketLaunch, map) {
    var populatedLaunches = rocketLaunch.launches;
    var self = this;
    for (var i = 0; i < populatedLaunches.length; i++) {
      var id = populatedLaunches[i].id;
      var url = 'https://launchlibrary.net/1.1/launch/'+ id;
      ajax.makeRequest(url, function() {
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


      var launchTime = {time: ""}
      launchTime.time = launch.launches[0].windowstart;
      launchTimes.push(launchTime.time);


      var position = {lat: "", lng: ""};
      position.lat = launch.launches[0].location.pads[0].latitude;
      position.lng =launch.launches[0].location.pads[0].longitude;

      var rocket = {rocketName: "", wikiURL: ""};
      rocket.rocketName = launch.launches[0].rocket.name;
      rocket.wikiURL = launch.launches[0].rocket.wikiURL;

      var mission = {missionDesc: "", missionName: "", missionType: ""};
      if (launch.launches[0].missions[0]) {
        mission.missionDesc = launch.launches[0].missions[0].description;
        mission.missionName = launch.launches[0].missions[0].name;
        mission.missionType = launch.launches[0].missions[0].typeName;
      } else {
        mission.missionDesc = "No mission data";
        mission.missionName = "No mission name";
        mission.missionType = "No mission type";
      }

      var individualLaunch = new Launch(position, mission, launchTime, rocket);
      map.addMarker(individualLaunch.position, individualLaunch.mission, individualLaunch.launchTime, individualLaunch.rocket);
        ourLaunchAPI.push(individualLaunch);
       
      }

      launchTimes.sort();
      nextLaunchTime = launchTimes[0];
      localStorage.setItem('nextLaunchTime', nextLaunchTime);

      for(launch of ourLaunchAPI){
        if (nextLaunchTime === launch.launchTime.time){
          localStorage.setItem('nextMissionLat', launch.position.lat);
          localStorage.setItem('nextMissionLng', launch.position.lng);
        } else {
          return;
        }
      }

      
    } 

  };


module.exports = Launches;