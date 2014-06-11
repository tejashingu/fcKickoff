var brazilKickOffser = angular.module('brazilKickOff.services', []);

brazilKickOffser.factory('selectallteam', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/selectallteam.php'
      });
    }

    return ergastAPI;
  });
  
brazilKickOffser.factory('getallmatchesservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getallmatches.php'
      });
    }

    return ergastAPI;
  });
brazilKickOffser.factory('showmatchesbyteamservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/showmatchesbyteam.php'
      });
    }

    return ergastAPI;
});
  
  brazilKickOffser.factory('getmatchesby16service', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getmatchesby16.php'
      });
    }

    return ergastAPI;
  });
  
  brazilKickOffser.factory('getmatchesbyquarterservice', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getmatchesbyquarter.php'
      });
    }

    return ergastAPI;
  });
  
  brazilKickOffser.factory('getmatchesbysemiservice', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getmatchesbysemi.php'
      });
    }

    return ergastAPI;
  });
  
  brazilKickOffser.factory('getmatchesbythirdservice', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getmatchesbythird.php'
      });
    }

    return ergastAPI;
  });
  
  
  brazilKickOffser.factory('getmatchesbyfinalservice', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getmacthesbyfinal.php'
      });
    }

    return ergastAPI;
  });
  
  brazilKickOffser.factory('getallofferservice', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getalloffer.php'
      });
    }

    return ergastAPI;
  });
  
   brazilKickOffser.factory('getpredictionservice', function($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/getprediction.php'
      });
    }

    return ergastAPI;
  });
  
   brazilKickOffser.factory('setpredictionservice', function($http) {
    var ergastAPI = {};
	var dataObject={user: 'username'};

    ergastAPI.getDrivers = function(xyz) {
      return $http({
        method: 'GET', 
        url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/setprediction.php',
		params : {'users': xyz}		
      });
    }

    return ergastAPI;
  });