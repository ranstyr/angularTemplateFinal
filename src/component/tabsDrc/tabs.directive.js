/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('tabsDrc', ['$state', tabsDrc]);

    function linkFn(scope, element, attrs, ctrl) {
        jQuery('.risk-box .slider').slider({
            value: 9
        }).trigger('slidechange');

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
            controllerAs: 'vm',
            link: linkFn
        };


    }

})();