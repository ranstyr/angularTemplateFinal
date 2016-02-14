/**
 * Created by ran.styr
 */
(function() {

    angular
        .module('project')
        .controller('PieChart3Controller', pieChart3);

    pieChart3.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope'];


    function pieChart3( $http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope) {
        $scope.dataservice = dataservice;
        $scope.chartSeries = dataservice.getChartPieLevel4Data().assetBreakdownData;

        $scope.chartConfig = {
            options: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                tooltip: {
                    pointFormat: '{series.name}: <br>{point.percentage:.1f}%</br>'
                },
                credits: {
                    enabled: true
                },
                loading: true,
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                                width: '100px'
                            },
                            color: '#000000',
                            maxStaggerLines:1,
                        }
                    },
                    series: {
                        animation: {
                            duration: 500
                        }
                    }
                }
            },
            series: $scope.chartSeries,
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            }


        };
        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.replaceAllSeries = function () {
            alert("replaceAllSeries");
            //$scope.chartConfig.series = data;
        };

        $scope.toggleHighCharts = function () {
            alert("toggleHighCharts");
        };

        $scope.removeSeries = function (id) {
            alert("removeSeries");
        };

        $scope.addSeries = function () {
            alert("addSeries");
        }

        $('#tab-3').on('tabChage3' , function(event , chartWidth){
            $scope.$apply(function() {

                $scope.chartConfig.series = $scope.dataservice.getChartPieLevel3Data().assetBreakdownData;

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
            $scope.chartConfig.series = $scope.dataservice.getChartPieLevel3Data().assetBreakdownData;

        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            $scope.chartConfig.series = $scope.dataservice.getChartPieLevel3Data().assetBreakdownData;

        })

        $rootScope.$on('angularDataChanged', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            $scope.chartConfig.series = $scope.dataservice.getChartPieLevel3Data().assetBreakdownData;

        })

    }


})();