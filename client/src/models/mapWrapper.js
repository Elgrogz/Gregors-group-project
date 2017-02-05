var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype ={
  addMarker: function(coords, contentInfo){
    var infoWindow = new google.maps.InfoWindow({
      content: contentInfo
    });
    
    var iconRocket = {
        url: "https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      icon: iconRocket
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