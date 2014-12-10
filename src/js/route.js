(function (define) {
    'use strict';

    define([
        'views/nav.view',
        'views/welcome.view'
    ], function (navView, welcomeView) {
        return function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', navView)
                .state('home.welcome', welcomeView);
        };
    });
}(this.define));
