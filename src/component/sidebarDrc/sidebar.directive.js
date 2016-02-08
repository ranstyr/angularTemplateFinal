/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('sidebarDrc', ['$state', sidebarDrc]);

    function linkFn(scope, element, attrs, ctrl) {
        console.log("sidebar");

    }

    function sidebarDrc($state) {

        return {
            replace: true,
            templateUrl: 'component/sidebarDrc/sidebar.html',
            scope: {},
            bindToController: {

            },
            controller: 'SidebarController',
            controllerAs: 'SidebarController',
            link: linkFn
        };


    }

})();