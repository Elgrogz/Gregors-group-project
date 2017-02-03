var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');

var UI = function(){
  this.renderMap();
  this.launches = new Launches();
}

UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      var map = new MapWrapper(mapDiv, center, 2);
      console.log(map)
    }
  }



module.exports = UI;