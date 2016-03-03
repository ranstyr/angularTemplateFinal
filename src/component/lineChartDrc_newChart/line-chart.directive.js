/**
 * Created by Ran Styr on 11/30/2015.
 */
(function() {

    angular
        .module('project')
        .directive('lineChart', ['$state', lineChart]);

    function linkFn(scope, element, attrs, ctrl) {
        //console.log("lineChart link");
    }

    function lineChart($state) {

        return {
            templateUrl: 'component/lineChartDrc/line-chart.html',
            scope: true,
            bindToController: {},
            controller: 'LineChartController',
            controllerAs: 'lineChart',
            link: linkFn
        };


    }

})();