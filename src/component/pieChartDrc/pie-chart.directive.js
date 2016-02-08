/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('pieChart', ['$state', pieChart]);

    function linkFn(scope, element, attrs, ctrl) {

    }

    function pieChart($state) {

        return {
            restrict: 'E',
            templateUrl: 'component/pieChartDrc/pie-chart.html',
            scope: true,
            bindToController: {},
            controller: 'PieChartController',
            controllerAs: 'pieChart',
            link: linkFn

        };


    }

})();