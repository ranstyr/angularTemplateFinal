/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('piechart3Drc', ['$state', piechart3Drc]);

    function linkFn(scope, element, attrs, ctrl) {

    }

    function piechart3Drc($state) {

        return {
            restrict: 'E',
            templateUrl: 'component/pieChart3Drc/pie-chart3.html',
            scope: true,
            bindToController: {},
            controller: 'PieChart3Controller',
            controllerAs: 'PieChart3Controller',
            link: linkFn

        };


    }

})();