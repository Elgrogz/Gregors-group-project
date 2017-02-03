var Launch = function(options) {
    this.launch = options.name;
}

Launch.prototype = {
  addItem: function(name) {
    this.name.push(name);
  }
}

module.exports = Launch;