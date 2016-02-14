/**
 * Created by ran.styr
 */
(function() {

    angular
        .module('project')
        .controller('TableController', table2);

    table2.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope'];


    function table2( $http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope) {
        $scope.dataservice = dataservice;

        var vm = this;
        vm.data = dataservice.getChartPieLevel4Data().InvestmentData;

        $('#tab-3').on('tabChage1' , function(event , chartWidth){
            $scope.$apply(function() {

                vm.data = dataservice.getChartPieLevel4Data().InvestmentData;

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
            vm.data = dataservice.getChartPieLevel4Data().InvestmentData;

        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            vm.data = dataservice.getChartPieLevel4Data().InvestmentData;

        })
    }


})();