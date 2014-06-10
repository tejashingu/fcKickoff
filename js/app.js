var brazilKickOff = angular.module('brazilKickOff', ['brazilKickOff.controllers','ezfb','brazilKickOff.services']);
brazilKickOff.config(function (ezfbProvider) {
    /**
     * Basic setup
     *
     * https://github.com/pc035860/angular-easyfb#configuration
     */
    ezfbProvider.setInitParams({
        appId: '261787254027306'
    });
});