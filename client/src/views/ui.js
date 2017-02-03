var Launches = require('../models/launches');

var UI = function(){
  this.launches = new Launches();
}

module.exports = UI;