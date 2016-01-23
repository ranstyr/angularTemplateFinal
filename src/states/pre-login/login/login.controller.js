/**
 * Created by Ran Styr
 */
(function (app) {

    app.controller('LoginController', ['$state', '$log', LoginController]);

    function LoginController($state, $log) {

        var vm = this;
        vm.credentials = {};

        activate();

        function activate() {

        };

        function registerEvents() {

        };

        function getData() {

        };

        vm.login = function() {

            //if (form.$invalid)
            //    return;

        };

        function authSuccess() {

        }

        function authFailed() {
        }

    }

})(angular.module('project'));