/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .controller('HeaderController', ['$scope', '$state', HeaderController]);

    function HeaderController($state, $log) {

        var vm = this;
        vm.credentials = {};
    }

})();