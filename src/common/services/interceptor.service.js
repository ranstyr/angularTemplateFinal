(function (app) {

    app.service('httpInterceptor', function($q) {
        var service = this;

        service.request = function(config) {

            return config;
        };

        service.responseError = function(response) {

            if (response.status == 401) { // 401 == Unauthorized

            }

            return $q.reject(response);
        };
    });

})(angular.module('project'));