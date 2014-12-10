(function (define) {
    'use strict';

    define([
        'text!../../templates/about.html'
    ], function (aboutTemplate) {

        return {
            url: '/about',
            template: aboutTemplate
        };
    });
}(this.define))
