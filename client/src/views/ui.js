var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var launches = null;

var UI = function(){
  this.renderMap();
  launches = new Launches();
  console.log(launches);
  // if (launches.length != 0){
  this.generateMarkers();
// }
}

UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      var map = new MapWrapper(mapDiv, center, 2);
      map.addMarker(center, "Hello");
    },
    generateMarkers: function() {
      // console.log(launches);

      for (var launch of launches) {
        console.log(launch)
        var lat = launch[0].position.lat;
        var lng = launch[0].position.lng;

        console.log(lat, lng);
      }
    }
  }



module.exports = UI;