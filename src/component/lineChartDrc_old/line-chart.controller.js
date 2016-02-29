/**
 * Created by ran.styr on 11/30/2015.
 */
(function () {

    angular
        .module('project')
        .controller('LineChartController', lineChart);


    lineChart.$inject = ['$http', '$q', '$localStorage', 'constants', '$scope', '$state', 'dataservice', '$rootScope'];


    function lineChart($http, $q, $localStorage, constants, $scope, $state, dataservice, $rootScope) {
        $scope.dataservice = dataservice;
/*
        $scope.chartSeries = [
            {
                name: "Sd2plusData",
                data: dataservice.getChartLineSd2PlusData(),
                color: 'rgb(216, 234, 240)'
            },
            {
                name: "Sd1plusData",
                data: dataservice.getChartLineSd1PlusData(),
                color: 'rgb(89, 161, 186)'
            },
            {
                name: "Sd1MinusData",
                data: dataservice.getChartLineSd1MinusData(),
                color: "rgb(180, 204, 212)"
            },
            {
                name: 'Sd2MinusValue',
                data: dataservice.getChartLineSd2MinusData(),
                color: "rgb(255, 255, 255)",
                fillOpacity : 1
            }
        ];
*/

        $scope.chartConfig = {
            size: {
                width: 0,
            },
            options: {
                chart: {
                    type: 'area',
                    margin: 80,
                    style: {
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontVariant: 'normal',
                        fontWeight: 'normal',
                        fontStretch: 'normal'
                    }
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
                tooltip: {
                    enabled: true,
                    formatter: function () {
                        var point = Highcharts.numberFormat(this.point.y, 0, '', ',');
                        return point;
                    }
                },
                plotOptions: {
                    area: {
                        stacking: null,
                        lineColor: 'rgb(44, 99, 136)',
                        lineWidth: 0,
                        marker: {
                            enabled: false
                        }
                    },
                    series: {
                        animation: {
                            duration: 5000
                        }
                    },
                    Series: {
                        visible: true,
                    },
                    loading: {
                        style: {
                            backgroundCSeriesolor: 'none',
                            opacity: 0.7
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
                min: $scope.dataservice.getInitialDeposit(),
                startOnTick: true,
                endOnTick: false,
                // 9 = categories.length
                max: 11 - 1.5
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return Highcharts.numberFormat(this.value, 0, '', ',');
                    },
                },
                showFirstLabel: false,
                min: 0,
                //minRange: this.MIN_RANGE,
                lineWidth: 1,
                //lineColor: 'blue',
                //gridLineColor: 'blue',
                gridLineWidth: 0,
                opposite: true,
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

        };

        $scope.updateChartData = function () {
            //$scope.chartConfig.size.width = ($rootScope.tab2width - 5);
            // $scope.chartConfig.size.height = ($rootScope.tab2height - 200);
            if (dataservice.getChartLineSd2PlusData().length>0){
               /* $scope.chartConfig.chartSeries = [
                    {
                        name: "Sd2plusData",
                        data: dataservice.getChartLineSd2PlusData(),
                        color: 'rgb(216, 234, 240)',
                        animation: {
                            duration: 5000
                        }
                    },
                    {
                        name: "Sd1plusData",
                        data: dataservice.getChartLineSd1PlusData(),
                        color: 'rgb(197, 223, 232)',
                        animation: {
                            duration: 5000
                        }
                    },
                    {
                        name: "Sd1MinusData",
                        data: dataservice.getChartLineSd1MinusData(),
                        color: "rgb(187, 218, 228)",
                        animation: {
                            duration: 5000
                        }
                    },
                    {
                        name: 'Sd2MinusValue',
                        data: dataservice.getChartLineSd2MinusData(),
                        color: "rgb(255, 255, 255)",
                        animation: {
                            duration: 5000
                        }
                    }
                ];
                var mindata = $scope.chartConfig.chartSeries[3].data[1];
                $scope.chartConfig.yAxis.min =  Math.min($scope.dataservice.getInitialDeposit(),mindata-(mindata*0.1));
                $scope.chartConfig.yAxis.startOnTick = false;*/
                $scope.reflow();
                //$scope.chartConfig.getHighcharts()
            }



        }
        //todo probaly we can delete it once we will have chart container width after next step

        $('#tab-2').on('tabChage2', function (event, chartWidth, chartH) {
            $scope.$apply(function () {
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
            $scope.updateChartData();

        })

    }


})();