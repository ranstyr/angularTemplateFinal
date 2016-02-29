(function () {
/*    var app = angular.module('project', [
        'ui.router',
        'highcharts-ng',
        'ngStorage'
    ]).config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        //$urlRouterProvider.otherwise("/layout/account");
        $urlRouterProvider.otherwise("/layout");
        //
        // Now set up the states
        $stateProvider
            .state('layout', {
                /!*abstract : true,*!/
                templateUrl: "/newSIsalesDemo2/src/states/app/layout.html",
                url: "/layout"
            })
            .state('account', {
/!*
                parent : 'layout',
*!/
                url: "/account",
                replace: true,
                templateUrl: "/newSIsalesDemo2/src/states/account/account.html"
            })

    });*/
    angular
        .module('project', [
            'ui.router',
            'highcharts-ng',
            'ngStorage'
        ]).config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        //$urlRouterProvider.otherwise("/layout/account");
        $urlRouterProvider.otherwise("/layout");
        //
        // Now set up the states
        $stateProvider
            .state('layout', {
                /*abstract : true,*/
                templateUrl: "states/app/layout.html",
                url: "/layout"
            })
            .state('account', {
                /*
                 parent : 'layout',
                 */
                url: "/account",
                replace: true,
                templateUrl: "states/account/account.html"
            })

    });;


})();