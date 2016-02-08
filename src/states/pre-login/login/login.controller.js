/**
 * Created by Ran Styr
 */
(function (app) {

    app.controller('LoginController', ['$state', '$log', '$scope', LoginController]);

    function LoginController($state, $log ,$scope ) {

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