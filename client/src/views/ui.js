var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var CountDown = require('../models/countDown');
var nextDate = localStorage.getItem('nextLaunchTime')


var UI = function(){
  this.map = this.renderMap();
  this.countDown = new CountDown(nextDate);
  this.launches = new Launches(this.map);
  this.initializeClock(this.countDown);
}


UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      var map = new MapWrapper(mapDiv, center, 2);
      return map;
    },

    initializeClock: function(countDown){
      var clock = document.querySelector("#countdown-div");
      // console.log(nextLaunchTime);
      var timeinterval = setInterval(function(){
          var t = countDown.getTimeRemaining();
          // console.log(t)
          clock.innerHTML = 'days: ' + t.days + '<br>' +
                            'hours: '+ t.hours + '<br>' +
                            'minutes: ' + t.minutes + '<br>' +
                            'seconds: ' + t.seconds;
          if(t.total<=0){
            clearInterval(timeinterval);
          }
        },1000);
      }
//   addAllMarkers: function(){
//     for(launch of this.launches){
//       var pos = launch.position;
//       var desc = launch.mission.missionDesc;
//       this.map.addMarker(pos, desc);
// =======
//       map = new MapWrapper(mapDiv, center, 2);
      

//           },
//     generateMarkers: function() {

//       for (var launch of launches) {
//         var latitude = launch.position.lat;
//         var longitude = launch.position.lng;
//         var coords = {lat: latitude, lng: longitude};
//         map.addMarker(coords, "Hello");

//       }
// >>>>>>> 5822324f186075274a1a71cb48bda298eb814a17
    
 

 };



module.exports = UI;