/**
 * Created by ran.styr
 */
(function() {

    angular
        .module('project')
        .controller('PieChartController', pieChart);

    pieChart.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope'];


    function pieChart( $http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope) {
        $scope.dataservice = dataservice;
        $scope.chartSeries = dataservice.getChartPieLevel4Data().assetBreakdownData;

        $scope.chartConfig = {
            options: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    style: {
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontVariant: 'normal',
                        fontWeight: 'normal',
                        fontStretch: 'normal'
                    }
                },
                tooltip: {
                    pointFormat: '<br>{point.percentage:.0f}%</br>'
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
                            format: '<b>{point.name}</b><br><div style="font-size: 18px">{point.percentage:.0f} %<div>',
                            style: {
                                color: '#666666',
                                width: '100px',
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

                $scope.chartConfig.series = $scope.dataservice.getChartPieLevel4Data().assetBreakdownData;

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
            $scope.chartConfig.series = $scope.dataservice.getChartPieLevel4Data().assetBreakdownData;

        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            $scope.chartConfig.series = $scope.dataservice.getChartPieLevel4Data().assetBreakdownData;

        })


        $rootScope.$on('angularDataChanged', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/
            $scope.chartConfig.series = $scope.dataservice.getChartPieLevel4Data().assetBreakdownData;

        })




    }


})();