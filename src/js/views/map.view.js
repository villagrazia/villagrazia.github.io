(function (define) {
    'use strict';

    define([
        'text!../../templates/map.html'
    ], function (mapTemplate) {

        return {
            url: '/map',
            template: mapTemplate
        };
    });
}(this.define))
