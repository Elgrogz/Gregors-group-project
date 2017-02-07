var Launches = require('../models/launches');
var MapWrapper = require('../models/mapWrapper');
var CountDown = require('../models/countDown');
var nextDate = localStorage.getItem('nextLaunchTime');
var ajax = require('../models/ajax');


var UI = function(){
  this.map = this.renderMap();
  this.countDown = new CountDown(nextDate);
  this.launches = new Launches(this.map);
  this.initializeClock(this.countDown);
  var watchlistButton = document.querySelector("#watchlist-button");
  watchlistButton.style.visibility = 'hidden';
  watchlistButton.onclick = this.addToWatchlist.bind(this);

  this.listMissionsFromWatchlist();
}


UI.prototype = {
  renderMap: function () {
    var mapDiv = document.querySelector('#map');
    var center = {lat:20, lng:0};
      var map = new MapWrapper(mapDiv, center, 2);
      return map;
    },

    initializeClock: function(countDown){
      // var clock = document.querySelector("#countdown-div");
      var tBody = document.querySelector("#data-row");
      var row = document.createElement('tr');
       var daysCol = document.createElement('td');
       var hoursCol = document.createElement('td');
       var minutesCol = document.createElement('td');
       var secondsCol = document.createElement('td');
     
      // console.log(nextLaunchTime);
      var timeinterval = setInterval(function(){
          var t = countDown.getTimeRemaining();
          // console.log(t.days)
          daysCol.innerHTML = t.days;
          hoursCol.innerHTML = t.hours;
          minutesCol.innerHTML = t.minutes;
          secondsCol.innerHTML = t.seconds;
                       
          if(t.total<=0){
            clearInterval(timeinterval);
          }
        },1000);

      row.appendChild(daysCol);
      row.appendChild(hoursCol);
      row.appendChild(minutesCol);
      row.appendChild(secondsCol);
      tBody.appendChild(row);
      
      },

      addToWatchlist: function(){
        var nameForWatchList = {name: localStorage.getItem('name'), date: localStorage.getItem('date')};
        var nameAsString = JSON.stringify(nameForWatchList);
        // console.log(this.launches);
        ajax.makePostRequest('/', nameAsString, function(){
          console.log(this.responseText);
        });
      },

      listMissionsFromWatchlist: function(){
        var page = document.querySelector("#watchlist-test");
        var ul = document.createElement("ul");
        page.appendChild(ul);

        ajax.makeRequest('/launches', function(){
          if(this.status !== 200) return;
          var jsonString = this.responseText;
          watchlistMissions = JSON.parse(jsonString);

          watchlistMissions.forEach(function(mission){
            var liName = document.createElement("li");
              liName.innerHTML = mission.name
              ul.appendChild(liName);
            var liDate = document.createElement("li");
              liDate.innerHTML = mission.date
              ul.appendChild(liDate);
            var liStrings = document.createElement("li");
              liStrings.innerHTML = "-------------------"
              ul.appendChild(liStrings);
          });

        });


      }


 };



module.exports = UI;