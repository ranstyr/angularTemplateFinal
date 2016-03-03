/**
 * Created by Ran Styr
 */
(function () {

    angular
        .module('project')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$scope', '$state', 'dataservice', '$rootScope']

    function SidebarController($state, $log, dataservice, $rootScope) {

        var vm = this;
        vm.queryParams = {};
        vm.queryParams.sectorCheckbox = false;
        vm.queryParams.FinancialServices = false;



        bindJqUI();

        function bindJqUI() {
            $('#main').on('sliderTextChnage', function (event, value, AttName) {
                if (AttName) {
                    var name = AttName.replace(/[^a-zA-Z0-9]/g, '');
                    if (name === "describe") {
                        switch(value) {
                            //consertative
                            case "minimizingLoss":
                                value = 3;
                                break;
                            //Aggressive
                            case "maximizingGains":
                                value = 2;
                                break;
                            //Neutral
                            case "bothEqually":
                                value = 1;
                                break;
                        }
                    }
                    vm.queryParams[name] = value;

                    if (!(jQuery.isEmptyObject(vm.queryParams))) {
                        //printlog
                        //console.log(angular.copy(vm.queryParams));
                        $rootScope.$broadcast('angularSliderTextChnage', vm.queryParams);
                    }

                }

            });
            $('#main').on('sideBarNextStep', function (event, value, AttName) {
                //value - next step
                vm.queryParams["stepTo"] = value;
                $rootScope.$broadcast('angularSideBarNextStep', vm.queryParams);
            });
            $('#main').on('checkboxChnage', function (event, value, AttName) {
                //value - next step
                vm.queryParams[AttName] = value;
                $rootScope.$broadcast('angularSectorcheckboxChange', vm.queryParams);
            });

            $('#main').on('sectorcheckboxChange', function (event, value, AttName) {
                //value - next step

                if (AttName) {
                    var name = AttName.replace(/[^a-zA-Z0-9]/g, '');
                    vm.queryParams[name] = value;
                }
                $rootScope.$broadcast('angularSectorcheckboxChange', vm.queryParams);
            });



        }

        //silderchage - need to go to petch data.
        $rootScope.$on('angularSliderTextChnage', function (event, data) {
            //check we have minimum query params to petch data
            dataChange(data);
        })

        $rootScope.$on('angularSideBarNextStep', function (event, data) {
            dataChange(data);

        })

        $rootScope.$on('angularCheckboxChnagep', function (event, data) {
            dataChange(data);

        })

        $rootScope.$on('angularSectorcheckboxChange', function (event, data) {
            //check we have minimum query params to petch data
            dataChangeFromSector(data);
        })


        function dataChange(data) {
            var dat = dataservice.getPortfolio(vm.queryParams);
        }

        function dataChangeFromSector(data) {
            var dat = dataservice.getPortfoliofFromSector(vm.queryParams);
        }

        function ismMandatoryQueryParamsReady(){
            //check mandatory
            if (queryParams.describe && queryParams.Whatisyourliquidassetsnetworth && queryParams.Whatisyourannualincome && queryParams.TargetTime && queryParams.InitialDeposit && queryParams.Age ){
                return true;
            }
        }



    }

})();