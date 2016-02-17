/**
 * Created by ran.styr on 11/30/2015.
 */
(function() {

    angular
        .module('project')
        .controller('BarChartController', barChart);

    barChart.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope'];

    function barChart( $http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope) {
        $scope.dataservice = dataservice;
        $scope.chartConfig = {
            size : {
                width : 0,
            },
            series: [{
                /*            data: [9.2, 3.4, 5.2, 0.2, -1.1, {
                 y: -2.4,
                 color: 'red'
                 }, 6.7, 5.4, 2.8, 1.5, 12.1, 4.1, {
                 y: 14.5,
                 color: 'green'
                 }, 13.2 , 11.9 , 3.4 , 9.3 ,8 , 6.7],*/
                data: $scope.dataservice.getBarChartRevenuesData(),
                //data: [8.9,{"y":19.7,"color":"green"},17.2,16.9,-4.3,-9.8,-15.1,13.2,8.7,13.9,7.5,5,{"y":-16.9,"color":"red"},14.1,11.8,2.6,9.6,10.3,7.9,4],
                color : 'rgb(74, 86, 104)',
                showInLegend: false
            }],
            title: {
                text: ''
            },
            xAxis: {
                categories: $scope.dataservice.getBarChartYearData(),
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
                        }
                    },
                    series: {
                        pointPadding: 0,
                        groupPadding: 0.1
                    }
                }
            },
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
            /*            var seriesArray = $scope.chartConfig.series;
             seriesArray.splice(id, 1)*/
            alert("removeSeries");
        };

        $scope.addSeries = function () {
            alert("addSeries");

            /*            var rnd = []
             for (var i = 0; i < 10; i++) {
             rnd.push(Math.floor(Math.random() * 20) + 1)
             }
             $scope.chartConfig.series.push({
             data: rnd
             })*/
        }

        //todo probaly we can delete it once we will have chart container width after next step
        $('#tab-3').on('tabChage3' , function(event , chartWidth){
            $scope.$apply(function() {
                var min = $scope.dataservice.getMinValue();
                $scope.chartConfig.size.width = ($rootScope.tab3width -5);
                //$scope.chartConfig.size.height = ($rootScope.tab3height - 200);
                $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
                $scope.chartConfig.yAxis.min = min + min*0.2;
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

            var min = $scope.dataservice.getMinValue();
            $scope.chartConfig.size.width = ($rootScope.tab3width -5);
            //$scope.chartConfig.size.height = ($rootScope.tab3height - 200);
            $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
            $scope.chartConfig.yAxis.min = min + min*0.2;
        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
                            var min = $scope.dataservice.getMinValue();
                            $scope.chartConfig.size.width = ($rootScope.tab2width -2);
                            $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
                            $scope.chartConfig.yAxis.min = min + min*0.2;
                        });*/

            var min = $scope.dataservice.getMinValue();
            $scope.chartConfig.size.width = ($rootScope.tab3width -5);
            //$scope.chartConfig.size.height = ($rootScope.tab3height - 200);
            $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
            $scope.chartConfig.yAxis.min = min + min*0.2;

        })


    }


})();