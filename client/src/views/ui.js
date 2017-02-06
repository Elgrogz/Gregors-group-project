var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var launches = null;
var map;

var UI = function(){
  this.renderMap();
  launches = new Launches();
  this.generateMarkers();
}

UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      map = new MapWrapper(mapDiv, center, 2);
      

          },
    generateMarkers: function() {

      for (var launch of launches) {
        var latitude = launch.position.lat;
        var longitude = launch.position.lng;
        var coords = {lat: latitude, lng: longitude};
        map.addMarker(coords, "Hello");

      }
    }
  }



module.exports = UI;