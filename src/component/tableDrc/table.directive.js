/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('table2', ['$state', table2Drc]);

    function linkFn(scope, element, attrs, ctrl) {

    }

    function table2Drc($state) {

        return {
            replace : true,
            restrict: 'E',
            templateUrl: 'component/tableDrc/table.html',
            scope: true,
            bindToController: {},
            controller: 'TableController',
            controllerAs: 'vm',
            link: linkFn

        };


    }

})();