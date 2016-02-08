/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('headerDrc', ['$state', headerDrc]);

    function linkFn(scope, element, attrs, ctrl) {

/*        jQuery(function() {



        });



        // initialize custom form elements
                function initCustomForms() {
                    jcf.setOptions('Select', {
                        wrapNative: false,
                        wrapNativeOnMobile: false
                    });
                    jcf.replaceAll();
                }*/
    }

    function headerDrc($state) {

        return {
            restrict: 'E',
            templateUrl: 'component/headerDrc/header.html',
            scope: {},
            bindToController: {

            },
            controller: function(){},
            controllerAs: 'HeaderController',
            link: linkFn
        };


    }

})();