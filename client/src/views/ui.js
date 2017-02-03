var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var mapDiv = document.querySelector('#map');
var center = {lat:51.481703, lng:-0.191075};

var UI = function(){
  this.map = new MapWrapper(mapDiv, center, 10);
}

//  



module.exports = UI;