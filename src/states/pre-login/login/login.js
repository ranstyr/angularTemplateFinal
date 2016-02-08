/**
 * Created by Ran Styr
 */
(function (app) {

    app.config(['$stateProvider', appRoutes]);


    function appRoutes($stateProvider) {

        $stateProvider
/*            .state('login', {
                url: '/login',
                templateUrl: 'states/pre-login/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });*/
    }

})(angular.module('project'));