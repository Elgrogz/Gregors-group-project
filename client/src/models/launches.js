var launches;

var Launches = function() {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    console.log(launches);
   // self.populateLaunches(launches);
  });
};

Launches.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = callback;
    request.send();
  },
  populateLaunches: function(results) {
      var launches = [];
      for (var result of results) {
          var launch = new Launch(result);
          launches.push(launch);
          console.log(launches);
      }
      return launches;
    },
    all: function(callback) {
        var self = this;
        this.makeRequest('http://localhost:3000/api/launches', 'GET', function() {
            if (this.status !== 200) {
                return;
            }
            var jsonString = this.responseText;
            var results = JSON.parse(jsonString);

            var launches = self.populateLaunches(results);
            callback(launches);
        });
    }

}

module.exports = Launches;