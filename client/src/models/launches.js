var launches;

var Launches = function() {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    console.log(launches);
    self.populateLaunches(launches);
  });
};

Launches.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = callback;
    request.send();
  },
  populateLaunches: function(launches) {
    var populatedLaunches = launches.launches;
    console.log(populatedLaunches);
    // for (var launch of launches) {
    //   this.makeRequest('https://launchlibrary.net/1.1/launch/'+, 'GET', function() {
    //   launches.push(launch);
    // }
    // return launches;
    }
    // all: function(callback) {
    //     var self = this;
    //     this.makeRequest('http://localhost:3000/api/launches', 'GET', function() {
    //         if (this.status !== 200) {
    //             return;
    //         }
    //         var jsonString = this.responseText;
    //         var results = JSON.parse(jsonString);

    //         var launches = self.populateLaunches(launches);
    //         callback(launches);
    //     });
    // }

}

module.exports = Launches;