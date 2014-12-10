(function (define) {
    'use strict';

    define([
        'text!../../templates/nav.html',
        'bootstrap'
    ], function (indexTemplate) {

        var vendorDir = 'bower_components/';

        return {
            url: '/home',
            data: {
                css: [
                    vendorDir + 'bootstrap/dist/css/bootstrap.min.css',
                    'src/css/business-casual.css'
                ]
            },
            template: indexTemplate
        };
    });
}(this.define))
