var Launches = require('./launches')
var deadline

var CountDown = function(date){
  this.deadline = date;


}

CountDown.prototype = {
  getTimeRemaining: function () {
    var t = Date.parse(this.deadline) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
    console.log(t);
  }
}


module.exports = CountDown;

