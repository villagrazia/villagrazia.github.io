(function (requirejs) {
    'use strict';

    var vendorDir = '../../bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendorDir + 'angularjs/angular.min',
            angularUiRouter: vendorDir + 'ui-router/release/angular-ui-router.min',
            bootstrap: vendorDir + 'bootstrap/dist/js/bootstrap',
            uiRouterStyles: vendorDir + 'angular-ui-router-styles/ui-router-styles',
            jquery: vendorDir + 'jquery/dist/jquery.min',
            text: vendorDir + 'text/text'
        },
        shim: {
            angular : {
                exports : 'angular'
            },
            angularUiRouter: ['angular'],
            bootstrap: ['jquery'],
            uiRouterStyles: ['angular']
        },
        deps: ['app']
    });
}(this.requirejs));
