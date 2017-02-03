var launches;

var Launches = function() {
  var url = "https://launchlibrary.net/1.1/launch";
  var self = this;
  this.makeRequest(url, function() {
    if (this.status !==200) return;
    var jsonString = this.responseText;
    launches = JSON.parse(jsonString);
    console.log(launches);
   // self.populateList(launches);
  });
};

Launches.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = callback;
    request.send();
  }



}

module.exports = Launches;