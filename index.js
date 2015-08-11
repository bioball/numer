(function(){

  "use strict";

  var ONE_SECOND = 1000;
  var ONE_MINUTE = ONE_SECOND * 60;
  var ONE_HOUR = ONE_MINUTE * 60;
  var ONE_DAY = ONE_HOUR * 24;
  var ONE_WEEK = ONE_DAY * 7;
  var ONE_MONTH = ONE_DAY * 30;
  var ONE_YEAR = ONE_DAY * 365;

  Number.prototype.seconds = function(){
    return this * ONE_SECOND;
  };

  Number.prototype.minutes = function(){
    return this * ONE_MINUTE;
  };

  Number.prototype.hours = function(){
    return this * ONE_HOUR;
  };

  Number.prototype.days = function(){
    return this * ONE_DAY;
  };

  Number.prototype.weeks = function(){
    return this * ONE_WEEK;
  };

  Number.prototype.months = function(){
    return this * ONE_MONTH;
  };

  Number.prototype.years = function(){
    return this * ONE_YEAR;
  };

})();