var ajax = { 

  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = callback;
    request.send();
  },

  makePostRequest: function(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    console.log(data);
    request.send(data);
  }


}

module.exports = ajax;