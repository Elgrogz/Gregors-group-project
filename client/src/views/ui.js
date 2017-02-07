var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var CountDown = require('../models/countDown');


var UI = function(){
  this.map = this.renderMap();
  this.countDown = new CountDown();
  this.launches = new Launches(this.map);
  this.initializeClock(this.countDown);
  // var button = document.querySelector('button');
  // button.onclick = this.addToWatchlist;
}


UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      var map = new MapWrapper(mapDiv, center, 2);
      return map;
    },

    initializeClock: function(countDown){
      var clock = document.querySelector("#countdown-div");
      // console.log(nextLaunchTime);
      var timeinterval = setInterval(function(){
          var t = countDown.getTimeRemaining();
          // console.log(t)
          clock.innerHTML = 'days: ' + t.days + '<br>' +
                            'hours: '+ t.hours + '<br>' +
                            'minutes: ' + t.minutes + '<br>' +
                            'seconds: ' + t.seconds;
          if(t.total<=0){
            clearInterval(timeinterval);
          }
        },1000);
      }


 };



module.exports = UI;