/**
 * Created by Ran Styr
 */
(function () {

    angular
        .module('project')
        .controller('TabsController', TabsController);

    TabsController.$inject = ['$scope', '$state', 'dataservice', '$rootScope']

    function TabsController($state, $log, dataservice, $rootScope) {
        //TabsController need to update data in two cases:
        //1)slide change
        //2)next

        var vm = this;
        vm.data4 = dataservice.getChartPieLevel4Data().InvestmentData;
        vm.data3 = dataservice.getChartPieLevel3Data().InvestmentData;

        vm.set_background = function (tableRow) {

            return {background: tableRow.color };

        }



        $('#tab-1').on('tabChage1', function (event, chartWidth, chartHeight) {
            $rootScope.tab1width = chartWidth;
            $rootScope.tab1height = chartHeight;
        });


        $('#tab-2').on('tabChage2', function (event, chartWidth, chartHeight) {
            $rootScope.tab2width = chartWidth;
            $rootScope.tab2height = chartHeight;
        });

        $('#tab-3').on('tabChage3', function (event, chartWidth, chartHeight) {
            $rootScope.tab3width = chartWidth;
            $rootScope.tab3height = chartHeight;

        });


        $rootScope.$on('angularSliderTextChnage', function (event, data) {
            dataChange(data);
        })

        $rootScope.$on('angularNextStep', function () {

        })


        function dataChange(data) {
            //var p = dataservice.getPortfolio(data);
        }

        $('#tab-3').on('tabChage1', function (event, chartWidth) {
            $scope.$apply(function () {

                vm.data4 = dataservice.getChartPieLevel4Data().InvestmentData;
                vm.data3 = dataservice.getChartPieLevel3Data().InvestmentData;

            });
        });

        $rootScope.$on('angularSliderTextChnage', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            vm.data4 = dataservice.getChartPieLevel4Data().InvestmentData;
            vm.data3 = dataservice.getChartPieLevel3Data().InvestmentData;
        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            vm.data4 = dataservice.getChartPieLevel4Data().InvestmentData;
            vm.data3 = dataservice.getChartPieLevel3Data().InvestmentData;

        })

        $rootScope.$on('angularDataChanged', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            vm.data4 = dataservice.getChartPieLevel4Data().InvestmentData;
            vm.data3 = dataservice.getChartPieLevel3Data().InvestmentData;

        })


    }

})();