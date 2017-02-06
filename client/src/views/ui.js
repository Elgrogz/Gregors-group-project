var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var launches = null;
var map;

var UI = function(){
  this.renderMap();
  launches = new Launches();
  // console.log(launches);
  // if (launches.length != 0){
  this.generateMarkers();
// }
}

UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      map = new MapWrapper(mapDiv, center, 2);
      
    },
    generateMarkers: function() {
      // console.log(launches);

      for (var launch of launches) {
        // console.log(launch)
        var latitude = launch.position.lat;
        var longitude = launch.position.lng;
        var coords = {lat: latitude, lng: longitude};
        map.addMarker(coords, "Hello");

        // console.log(lat, lng);
      }
    }
  }



module.exports = UI;