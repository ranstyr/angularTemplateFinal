/**
 * Created by Ran Styr
 */
(function(app) {

    app.directive('afterrenderDrc', ['$state', afterrenderDrc]);

    function linkFn(scope, element, attrs, ctrl) {
        $(window).trigger( "onAfterDirectiveRender" );
    }


    function afterrenderDrc($state) {

        return {
            restrict: 'E',
            scope: {},
            bindToController: {

            },
            controller: function(){},
            controllerAs: 'afterrenderDrc',
            link: linkFn
        };


    }

})(angular.module('project'));