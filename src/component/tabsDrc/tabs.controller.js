/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .controller('TabsController' ,TabsController );

    TabsController.$inject = ['$scope', '$state','dataservice']

    function TabsController($state, $log , dataservice) {

        var vm = this;

    }

})();