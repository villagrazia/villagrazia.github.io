(function (define) {
    'use strict';

    define([
        'views/nav.view',
        'views/welcome.view',
        'views/about.view',
        'views/map.view'
    ], function (navView, welcomeView, aboutView, mapView) {
        return function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home/welcome');
            $stateProvider
                .state('home', navView)
                .state('home.welcome', welcomeView)
                .state('home.about', aboutView)
                .state('home.map', mapView);
        };
    });
}(this.define));
