
document.addEventListener('deviceready', function onDeviceReady() {
    angular.bootstrap(document, ['brazilKickOff']);
}, false);
var brazilKickOff = angular.module('brazilKickOff', ['ngRoute', 'ngTouch', 'brazilKickOff.controllers','ezfb','brazilKickOff.services']);

var brazilKickOff = angular.module('brazilKickOff', ['brazilKickOff.controllers','ezfb','brazilKickOff.services']);

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