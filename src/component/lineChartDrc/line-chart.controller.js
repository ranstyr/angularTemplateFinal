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
        $scope.chartSeries = [
            {
                name: "Sd2plusData",
                data: dataservice.getChartLineSd2PlusData(),
                color: 'rgb(216, 234, 240)'
            },
            {
                name: "Sd1plusData",
                data: dataservice.getChartLineSd1PlusData(),
                color: 'rgb(197, 223, 232)'
            },
            {
                name: "Sd1MinusData",
                data: dataservice.getChartLineSd1MinusData(),
                color: "rgb(187, 218, 228)"
            },
            {
                name: 'Sd2MinusValue',
                data: dataservice.getChartLineSd2MinusData(),
                color: "rgb(255, 255, 255)",
                fillOpacity : 1
            }
        ];

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
                Series: {
                    visible: true
                },
                tooltip: {
                    enabled: true
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: 'rgb(44, 99, 136)',
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
                min: 1,
                startOnTick: false,
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
                        return Highcharts.numberFormat(this.value/4, 0, '', ',');
                    },
                },
                startOnTick: false,
                min: $scope.dataservice.getInitialDeposit()
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
            $scope.chartConfig.chartSeries = [
                {
                    name: "Sd2plusData",
                    data: dataservice.getChartLineSd2PlusData(),
                    color: 'rgb(216, 234, 240)'
                },
                {
                    name: "Sd1plusData",
                    data: dataservice.getChartLineSd1PlusData(),
                    color: 'rgb(197, 223, 232)'
                },
                {
                    name: "Sd1MinusData",
                    data: dataservice.getChartLineSd1MinusData(),
                    color: "rgb(187, 218, 228)"
                },
                {
                    name: 'Sd2MinusValue',
                    data: dataservice.getChartLineSd2MinusData(),
                    color: "rgb(255, 255, 255)"
                }
            ];
            $scope.chartConfig.yAxis.min =  $scope.dataservice.getInitialDeposit()/4;
            $scope.chartConfig.yAxis.startOnTick = false;
            $scope.reflow()


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