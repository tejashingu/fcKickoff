var brazilKickOffCon = angular.module('brazilKickOff.controllers',['ezfb','brazilKickOff.services']);

brazilKickOffCon.controller( 'brazilFbLogin', [ '$scope', 'ezfb', function( $scope, ezfb ){
     
    $scope.init = false;
    $scope.isLoggedIn = 0;
    
    updateLoginStatus();

    
    $scope.login = function () {
        ezfb.login(function (res) {
            if(res.status == 'connected') {
                updateLoginStatus(updateMe);
            }
        }, {scope: 'email'});
    };

    $scope.logout = function () {
        ezfb.logout(function () {
            updateLoginStatus(updateMe);
        });
    };

    $scope.me = function() {
        updateMe();
    };

    function updateMe() {
        ezfb.api('/me', function(response) {
            $scope.user = response;
            $scope.idNo = createUsers.setUsers( response.id, response.email, response.name, " ", response.timezone );
            console.log($scope.idNo);
        });
    }

    function updateLoginStatus() {
        ezfb.getLoginStatus(function (res) {
            $scope.loginStatus = res;
            if(res.status == 'connected') {
                updateMe();
                $scope.isLoggedIn = 1;
            }
        });
    }
}]);

//brazilKickOffCon.controller( 'brazildbcon', [ '$scope', 'brazildb', function( $scope, brazildb ){
//    var isdata=brazildb.getisdata();
//    if(isdata==0)
//    {
//        var db=brazildb.getdb
//        db.transaction(function(tx){
//            
//        var noteams=0;
//        
//        });
//    }
//    }]);
/*
brazilKickOffCon.controller( 'selectAllTeam', [ '$scope', 'selectallteamservice', function( $scope, selectallteamservice ){
	var userInfo = this;
	userInfo.user=[];
	selectallteamservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);

brazilKickOffCon.controller( 'getAllMatches', [ '$scope', 'getallmatchesservice', function( $scope, getallmatchesservice ){
	var userInfo = this;
	userInfo.user=[];
	getallmatchesservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	});

}]);
	
brazilKickOffCon.controller( 'showMatchesByTeam' ,['$scope', 'showmatchesbyteamservice', function( $scope, showmatchesbyteamservice ){
	var userInfo = this;
	userInfo.user=[];
	showmatchesbyteamservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );

}]);

brazilKickOffCon.controller( 'getMatchesBy16', [ '$scope', 'getmatchesby16service', function( $scope, getmatchesby16service ){
	var userInfo = this;
	userInfo.user=[];
	getmatchesby16service.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);	
	
brazilKickOffCon.controller( 'getMatchesByQuarter', [ '$scope', 'getmatchesbyquarterservice', function( $scope, getmatchesbyquarterservice ){
	var userInfo = this;
	userInfo.user=[];
	getmatchesbyquarterservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);	

brazilKickOffCon.controller( 'getMatchesBySemi', [ '$scope', 'getmatchesbysemiservice', function( $scope, getmatchesbysemiservice ){
	var userInfo = this;
	userInfo.user=[];
	getmacthesbysemiservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);	

brazilKickOffCon.controller( 'getMatchesByThird', [ '$scope', 'getMatchesByThirdservice', function( $scope, getMatchesByThirdservice ){
	var userInfo = this;
	userInfo.user=[];
	getmacthesbythirdservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);		
brazilKickOffCon.controller( 'getMatchesByFinal', [ '$scope', 'getmacthesbyfinalservice', function( $scope, getmacthesbyfinalservice ){
	var userInfo = this;
	userInfo.user=[];
	getmatchesbyfinalservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);	
	
brazilKickOffCon.controller( 'getAllOffer', [ '$scope', 'getallofferservice', function( $scope, getallofferservice ){
	var userInfo = this;
	userInfo.user=[];
	getallofferservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);		
brazilKickOffCon.controller( 'getPrediction', [ '$scope', 'getpredictionservice', function( $scope, getpredictionservice ){
	var userInfo = this;
	userInfo.user=[];
	getpredictionservice.getDrivers().success( function(data){
		console.log(data);
		userInfo.user = data;
	} );
}]);		
brazilKickOffCon.controller( 'setPrediction', [ '$scope', 'setpredictionservice', function( $scope, setpredictionservice ){
	var userInfo = this;

	userInfo.user=[];
	setpredictionservice.getDrivers(xyz).success( function(data){
		console.log(data);
		userInfo.user = data;
		
	} );
}]);



*/