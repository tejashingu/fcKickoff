var brazilKickOffser = angular.module('brazilKickOff.services', []);
        

brazilKickOffser.factory('brazildb', function () {

    var isdata = 0;
    var db = openDatabase('brazildb', '1.0', 'kickoff_database', 2 * 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS TEAM (id integer, name text,url text )');
        tx.executeSql('CREATE TABLE IF NOT EXISTS ALARM(ID INTEGER,MATCH TEXT,TIME5MIN TEXT,TIME60MIN TEXT,USERID INTEGER)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS COUNTRIES(ID INTERGER,NAME TEXT,GROUP TEXT)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS MATCH(ID INTERGER,TIMESTAMP DATE,MATCHNO INTERGER,TIME TIME,STADIUM TEXT,WINNER INTEGER,PREDICTIONSTATUS INTEGER,GROUP TEXT)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS MATCH_TEAM(MATCH INTEGER,TEAM INTEGER,SCORE TEXT,ORDER INTEGER)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS OFFERS(ID INTEGER,NAME TEXT,URL TEXT, ORDER INTEGER)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS PREDICTION(ID INTEGER,USER TEXT,SCORE1 INTEGER,SCORE2 INTEGER,MATCH INTEGER,TIMESTAMP DATETIME)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS SCHEDULES(ID INTEGER,MATCH TEXT,TIME DATETIME,STADIUM TEXT,T1 TEXT,T2 TEXT,T1SCORE INTEGER.T2SCORE INTEGER,WINNER TEXT');
        tx.executeSql('CREATE TABLE IF NOT EXISTS USERS(ID INTEGER,UNIQUEID VARCHAR,EMAIL VARCHAR,NAME VARCHAR,ACESSTOKEN VARCHAR,TIMEZONE VARCHAR)');


    });
    return {
        getdb: function () {
            return db;
        },
        getisdata: function () {
            return isdata;
        },
        setUsers: function(id, email, name, accessToken, timeZone) {
            db.transaction( function(tx){
                tx.executeSql('Insert into `users` (  `id`,`uniqueid`,`email`,`name`,`acesstoken`,`timezone` ) values ("'+id+'", "'+email+'", "'+name+'", "'+accessToken+'", "'+timeZone+'")');
            } );
        }
    };
});

brazilKickOffser.factory( 'createUsers',[ '$http', function($http){
    return {
        setUsers: function(id, email, name, accessToken, timeZone){
            return $http({
                url: 'http://flyingcursor.com/brazil_kickoff/index.php/site/setUsers/',
                params : {
                    'id': id,
                    'email': email,
                    'name': name,
                    'accessToken': accessToken,
                    'timeZone': timeZone
                }
            });
        }
    };
}]);
    
/*

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
  
  
  */