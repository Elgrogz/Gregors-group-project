var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    }
  })
}


MapWrapper.prototype ={

  addMarker: function(coords, missionData, launchTime, rocketData){
    var infoWindow = new google.maps.InfoWindow({

      content: "<div id=iw-container>" + 
                    "<div class='iw-title'><p><b>Mission</p></div>" +
                        "<p>Mission name: </b>" + missionData.missionName + 
                         "</p><p><b>Description: </b>" + missionData.missionDesc + 
                        "</p><p><b>Mission Type:</b> " + missionData.missionType +
                        "</p><p><b>Date:</b> " + launchTime.time +
                    "<div class='iw-title'></p><p><b>Rocket</p></div>" +
                        "<p>Rocket name: </b>" + rocketData.rocketName +
                        "</p><p><b>Rocket info: </b><a href='" + rocketData.wikiURL + "'>" + rocketData.wikiURL + "</a></p>" +
                        "</a></p> <p><button>Button</button></p></div>"
    });

    // var button = document.querySelector('button');
    // button.onclick = addToWatchlist;
   
    var iconRocket = {
        url: "https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png",
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      icon: iconRocket,
      name: missionData.missionName
    });
    marker.addListener('click', function (){
      infoWindow.open(this.googleMap, marker);
      this.googleMap.setZoom(8);
      this.googleMap.setCenter(marker.getPosition());
      localStorage.setItem()
    }.bind(this));
    google.maps.event.addListener(infoWindow, 'closeclick', function() {
      this.googleMap.setCenter(coords);
      this.googleMap.setZoom(2);
    }.bind(this));
  },
  centreMap: function (button, coords, zoom){
    button.onclick = function () {
      this.googleMap.setCenter(coords);
      this.googleMap.setZoom(zoom);
    }.bind(this);
  }
}

module.exports = MapWrapper;