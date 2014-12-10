(function (define) {
    'use strict';

    define([
        'text!../../templates/welcome.html'
    ], function (welocmeTemplate) {

        return {
            url: '/welcome',
            template: welocmeTemplate
        };
    });
}(this.define))
