(function (define) {
    'use strict';

    define([
        'angular',
        'route',
        'angularUiRouter',
        'uiRouterStyles'
    ], function (angular, route) {

        var app = angular.module('cultivarApp', [
            'ui.router',
            'uiRouterStyles'
        ]);

        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['cultivarApp']);
        });

        return app;
    });
}(this.define));
