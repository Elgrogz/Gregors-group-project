var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');

var UI = function(){
  this.renderMap();
}

UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:51.481703, lng:-0.191075};
      var map = new MapWrapper(mapDiv, center, 10);
      console.log(map)
    }
  }



module.exports = UI;