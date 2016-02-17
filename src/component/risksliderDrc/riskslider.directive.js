/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .directive('risksliderDrc', ['$state', risksliderDrc]);

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

    function risksliderDrc($state) {

        return {
            replace: true,
            templateUrl: 'component/risksliderDrc/riskslider.html',
            scope: {},
            bindToController: {

            },
            controller: 'SidebarController',
            controllerAs: 'SidebarController',
            link: linkFn
        };


    }

})();