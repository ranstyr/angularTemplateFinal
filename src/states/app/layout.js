/**
 * Created by Ran Styr
 */
(function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', appRoutes]);

    function appRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'states/app/layout.html',
                resolve: {
                    init: []
                }
            });

        $urlRouterProvider.otherwise('/login');
    }

})(angular.module('project'));