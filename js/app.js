
document.addEventListener('deviceready', function onDeviceReady() {
    angular.bootstrap(document, ['brazilKickOff']);
}, false);

brazilKickOff.config(function (ezfbProvider) {
    ezfbProvider.setInitParams({
        appId: '261787254027306',
        nativeInterface: CDV.FB,
        useCachedDialogs: false
    });

    ezfbProvider.setLoadSDKFunction(function ($rootScope, ezfbAsyncInit) {
        $rootScope.ezfbAsyncInit = ezfbAsyncInit;
    });
});

var brazilKickOff = angular.module('brazilKickOff', ['ngRoute', 'ngTouch','mobile-angular-ui', 'brazilKickOff.controllers','ezfb','brazilKickOff.services']);

brazilKickOff.config( function($routeProvider){ 
    $routeProvider.when('/', {
        templateUrl: "templates/home.html"
    });
    $routeProvider.when('/groups', {
        templateUrl: "templates/groups.html"
    });
});