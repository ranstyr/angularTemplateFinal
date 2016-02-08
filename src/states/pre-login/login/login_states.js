/**
 * Created by rotem.jackoby on 05/12/2015.
 */
(function(angular){

    "use strict";

    angular.module('app', [] ).constant('strategiesStates', {
        app : {
            abstract     : true,
            name         : 'LoggedIn.strategies',
            parent       : 'LoggedIn',
            url          : '/strategies',
            controller   : 'strategiesCtrl',
            controllerAs : 'tabCtrl',
            templateUrl  : 'src/app/tabs/strategies/app.html'
        },
        protflyo : {
            name         : 'LoggedIn.strategies.allStrategies',
            parent       : 'LoggedIn.strategies',
            url          : '/all',
            templateUrl  : 'src/app/tabs/strategies/subTabs/allStrategies/allStrategies.html'
        },
        myStrategies : {
            name         : 'LoggedIn.strategies.myStrategies',
            parent       : 'LoggedIn.strategies',
            url          : '/my',
            templateUrl  : 'src/app/tabs/strategies/subTabs/myStrategies/myStrategies.html'
        }
    });
    angular.module('mirrorTrader').config(function($stateProvider,strategiesStates, $urlRouterProvider){
        $stateProvider
        /* --- Strategies tab --- */
            .state(strategiesStates.strategies)
            .state(strategiesStates.allStrategies)
            .state(strategiesStates.myStrategies)
    });

})(angular);
