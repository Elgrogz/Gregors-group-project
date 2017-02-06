var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype ={
  addMarker: function(coords, missionData){
    var infoWindow = new google.maps.InfoWindow({
      content: "<p><b>Mission name: </b>" + missionData.missionName + "</p><p><b>Description: </b>" + missionData.missionDesc + "</p><p><b>Mission Type:</b> " + missionData.missionType +"</p>"
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function (){
      infoWindow.open(this.googleMap, marker);
    });
  },
  centreMap: function (button, coords, zoom){
    button.onclick = function () {
      this.googleMap.setCenter(coords);
      this.googleMap.setZoom(zoom);
    }.bind(this);
  }
}

module.exports = MapWrapper;