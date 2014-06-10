var brazilKickOff = angular.module('brazilKickOff', ['brazilKickOff.controllers','ezfb','brazilKickOff.services']);
brazilKickOff.config(function (ezfbProvider) {
    ezfbProvider.setInitParams({
        appId: '261787254027306',
        nativeInterface: CDV.FB,
        useCachedDialogs: false
    });

    ezfbProvider.setLoadSDKFunction(function ($document, ezfbAsyncInit) {
        $document.on('deviceready', function () {
            ezfbAsyncInit();
        });
    });
});