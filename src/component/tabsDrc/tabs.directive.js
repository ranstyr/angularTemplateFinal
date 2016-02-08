/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('tabsDrc', ['$state', tabsDrc]);

    function linkFn(scope, element, attrs, ctrl) {

    }


    function tabsDrc($state) {

        return {
            replace: true,
/*
            restrict: 'E',
*/
            templateUrl: 'component/tabsDrc/tabs.html',
            scope: {},
            controller: 'TabsController',
            controllerAs: 'TabsController',
            link: linkFn
        };


    }

})();