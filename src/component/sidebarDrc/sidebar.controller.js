/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$scope', '$state' ,'dataservice']

    function SidebarController($state, $log , dataservice) {

        var vm = this;
        vm.queryParams = {};


        bindJqUI();




        function bindJqUI(){
            $('#main').on('sliderTextChnage' , function(event , value , AttName ){
                if (AttName){
                    var name = AttName.replace(/[^a-zA-Z0-9]/g,'');
                    console.log("value" + value);
                    console.log("name" + name);

                    vm.queryParams[name] = value;

                    if (!(jQuery.isEmptyObject(vm.queryParams))) {
                        //printlog
                        console.log(angular.copy(vm.queryParams));
                        dataservice.getPortfolio( vm.queryParams);

                    }

                }

            });


        }





    }

})();