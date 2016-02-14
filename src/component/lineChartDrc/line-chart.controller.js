/**
 * Created by ran.styr on 11/30/2015.
 */
(function () {

    angular
        .module('project')
        .controller('LineChartController', lineChart);


    lineChart.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope'];


    function lineChart($http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope) {
        $scope.dataservice = dataservice;
        $scope.chartSeries = [
                {
                    name: 'minValue',
                    data: dataservice.getLineChartMinData(),
                    color: "rgba(220,220,220,0.2)"
                },
                {
                    name: "median",
                    data: dataservice.getLineChartMedianData(),
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "maxValue",
                    data: dataservice.getChartLineMaxData(),
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "white",
                    data: dataservice.getLineChartMinData(),
                    color: "white"
                }];

        $scope.chartConfig = {
            size : {
                width : 0,
                height : 500
            },
            options: {
                chart: {
                    type: 'area',
                    margin: 60
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: '',
                    style: {
                        display: 'none'
                    }
                },
                subtitle: {
                    text: '',
                    style: {
                        display: 'none'
                    }
                },
                Series: {
                    visible: true
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        },
                        events: {
                            redraw: function () {
                                console.log("line redraw");
                            },
                            afterAnimate: function () {
                                console.log("line redraw");
                            }
                        }
                    },

                },
            },
            series: $scope.chartSeries,
            xAxis: {
                categories: $scope.dataservice.getChartLineYearData(),
                title: {
                    enabled: false
                },
                tickLength: 0,
                tickmarkPlacement: 'on',
                min: 0.5,
                startOnTick: false,
                endOnTick: false,
                // 9 = categories.length
                max: 9 -1.5
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value ;
                    }
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
        };
        //todo probaly we can delete it once we will have chart container width after next step

        $('#tab-2').on('tabChage2' , function(event , chartWidth , chartH){
            $scope.$apply(function() {
                $scope.chartConfig.size.width = ($rootScope.tab2width -2);
               // $scope.chartConfig.size.height = ($rootScope.tab2height - 200);
                $scope.chartConfig.chartSeries = [
                    {
                        name: 'minValue',
                        data: dataservice.getLineChartMinData(),
                        color: "rgba(220,220,220,0.2)"
                    },
                    {
                        name: "median",
                        data: dataservice.getLineChartMedianData(),
                        color: "rgba(151,187,205,0.2)"
                    },
                    {
                        name: "maxValue",
                        data: dataservice.getChartLineMaxData(),
                        color: "rgba(151,187,205,0.2)"
                    },
                    {
                        name: "white",
                        data: dataservice.getLineChartMinData(),
                        color: "white"
                    }];
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

            $scope.chartConfig.size.width = ($rootScope.tab2width -2);
            //$scope.chartConfig.size.height = ($rootScope.tab2height - 200);
            $scope.chartConfig.chartSeries = [
                {
                    name: 'minValue',
                    data: dataservice.getLineChartMinData(),
                    color: "rgba(220,220,220,0.2)"
                },
                {
                    name: "median",
                    data: dataservice.getLineChartMedianData(),
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "maxValue",
                    data: dataservice.getChartLineMaxData(),
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "white",
                    data: dataservice.getLineChartMinData(),
                    color: "white"
                }];


        })

        $rootScope.$on('angularSideBarNextStep', function () {
            //todo should i perform apply?
            /*            $scope.$apply(function() {
             var min = $scope.dataservice.getMinValue();
             $scope.chartConfig.size.width = ($rootScope.tab2width -2);
             $scope.chartConfig.series[0].data = $scope.dataservice.getBarChartRevenuesData();
             $scope.chartConfig.yAxis.min = min + min*0.2;
             });*/

            $scope.chartConfig.size.width = ($rootScope.tab2width -2);
            //$scope.chartConfig.size.height = ($rootScope.tab2height - 200);
            $scope.chartConfig.chartSeries = [
                {
                    name: 'minValue',
                    data: dataservice.getLineChartMinData(),
                    color: "rgba(220,220,220,0.2)"
                },
                {
                    name: "median",
                    data: dataservice.getLineChartMedianData(),
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "maxValue",
                    data: dataservice.getChartLineMaxData(),
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "white",
                    data: dataservice.getLineChartMinData(),
                    color: "white"
                }];


        })

    }


})();