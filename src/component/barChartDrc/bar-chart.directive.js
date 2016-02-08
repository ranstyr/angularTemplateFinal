/**
 * Created by Ran Styr on 11/30/2015.
 */
(function() {

    angular
            .module('project')
            .directive('barChart', ['$state', barChart]);

    function linkFn(scope, element, attrs, ctrl) {

    }

    function barChart($state) {

        return {
            restrict: 'E',
            templateUrl: 'component/barChartDrc/bar-chart.html',
            scope: true,
            bindToController: {},
            controller: 'BarChartController',
            controllerAs: 'barChart',
            link: linkFn
        };


    }

})();