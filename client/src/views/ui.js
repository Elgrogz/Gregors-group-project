var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');


var UI = function(){

  this.map = this.renderMap();
  this.launches = new Launches(this.map);

}


UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      var map = new MapWrapper(mapDiv, center, 2);
      return map;
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