/**
 * Created by ran.styr on 11/30/2015.
 */
(function() {

    angular
        .module('project')
        .controller('BarChartController', barChart);

    barChart.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope' ,'$timeout' ];

    function barChart( $http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope , $timeout) {
        $scope.dataservice = dataservice;
        $scope.chartConfig = {
/*            size : {
                width : 1250
            },*/
            series: [{
                data: $scope.dataservice.getBarChartRevenuesData(),
                color : 'rgb(74, 86, 104)',
                showInLegend: false
            }],
            title: {
                text: ''
            },
            xAxis: {
                categories: $scope.dataservice.getBarChartYearData(),
                labels: {
                    style: {fontSize: '18px'}
                },
                lineWidth: 0,
                minorTickLength: 0,
                tickLength: 0,
                minorGridLineWidth: 0,
            },
            yAxis: {
                visible: false,
                gridLineColor: 'transparent',
                min: $scope.dataservice.getMinValue(),
                title: {
                    style: {
                        display: 'none'
                    },
                    text: ''
                }
            },
            loading: false,
            options: {
                chart: {
                    type: 'column',
                    marginLeft: 0,
                    marginRight: 0
                },
                colors: [
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)',
                    'rgb(74, 86, 104)'
                ],
                tooltip : {
                    enabled: true
                },
                subtitle: {
                    text: ''
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        },
                        colorByPoint: true
                    },
                    series: {
                        pointPadding: 0,
                        groupPadding: 0.1
                    }
                }
            },
            func: function(chart) {
                $timeout(function() {
                    chart.reflow();
                }, 0);
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
            //this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
            alert("toggleHighCharts");
        };

        $scope.removeSeries = function (id) {

            alert("removeSeries");
        };

        $scope.addSeries = function () {
            alert("addSeries");

        };

        $scope.updateChartData = function () {
            var min = $scope.dataservice.getMinValue();
            //$scope.chartConfig.size.width = ($rootScope.tab3width -5);
            //$scope.chartConfig.size.height = ($rootScope.tab3height - 200);
            $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
            $scope.chartConfig.xAxis.categories = $scope.dataservice.getBarChartYearData()
            //$scope.chartConfig.yAxis.min = min + min*0.2;
            $scope.chartConfig.yAxis.min = -24;
            $scope.chartConfig.yAxis.max = 24;
            $scope.chartConfig.options.colors = $scope.dataservice.getBarChartColorsArray();
            $scope.reflow()

        }

        //todo probaly we can delete it once we will have chart container width after next step
        $('#tab-3').on('tabChage3' , function(event , chartWidth){
            $scope.$apply(function() {
                $scope.updateChartData();
            });
        });

        $rootScope.$on('angularSliderTextChnage', function () {
            //todo should i perform apply?
            $scope.updateChartData();
        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            $scope.updateChartData();

        })

        $rootScope.$on('angularDataChanged', function () {
            //todo should i perform apply?
            $scope.updateChartData();

        })



    }


})();