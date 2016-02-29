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

        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                plotBorderWidth: 1,
                defaultSeriesType: 'area',
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
                //inverted: false,
                //margin: [50, 250, 60, 80]
            },
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            },
            legend: {
                enabled: false
            },
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
            },
            tooltip: {
                enabled: true,
                formatter: function () {
                    var point = Highcharts.numberFormat(this.point.y, 0, '', ',');
                    return point;
                }
            },
            subtitle: {
                text: '',
                style: {
                    display: 'none'
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
            series : [
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
            ]
            }
        })

        $scope.updateChartData = function () {
            //$scope.chartConfig.size.width = ($rootScope.tab2width - 5);
            // $scope.chartConfig.size.height = ($rootScope.tab2height - 200);
            if (dataservice.getChartLineSd2PlusData().length>0){

                if (chart.series[0]){chart.series[0].remove(false);}
                if (chart.series[0]){chart.series[0].remove(false);}
                if (chart.series[0]){chart.series[0].remove(false);}
                if (chart.series[0]){chart.series[0].remove(false);}

                chart.redraw();

                var options = {
                    type: "line",
                    stacking: null,
                   /* yAxis: /(bar|column)/.test(type) ? 1 : 0,*/
/*                    dataLabels: {
                        enabled: type == 'pie'
                    },*/
                    data: dataservice.getChartLineSd2PlusData(),
                    name: "Sd2plusData",
                    color: 'rgb(216, 234, 240)',
                    animation: {
                        duration: 3000
                    }



                };

                chart.addSeries(options, false);
                chart.redraw();

                var options = {
                    type: "area",
                    stacking: null,
                    /* yAxis: /(bar|column)/.test(type) ? 1 : 0,*/
                    /*                    dataLabels: {
                     enabled: type == 'pie'
                     },*/
                    data: dataservice.getChartLineSd2PlusData(),
                    name: "Sd1plusData",
                    color: 'rgb(197, 223, 232)',
                    animation: {
                        duration: 3000
                    }


                };

                chart.addSeries(options, false);

                var i = chart.series.length;
                var options = {
                    type: 'line',
                    stacking: null,
                    yAxis: 0,
                    data: [
                        -0.9 + i,
                        0.6 + i,
                        3.5 + i,
                        8.4 + i,
                        13.5 + i,
                        17.0 + i,
                        18.6 + i,
                        17.9 + i,
                        14.3 + i,
                        9.0 + i,
                        3.9 + i,
                        1.0 + i
                    ]
                };


                chart.addSeries(options, false);

                chart.redraw();

           /*
                chart.addSeries(  {
                    name: "Sd1plusData",
                    data: dataservice.getChartLineSd1PlusData(),
                    color: 'rgb(197, 223, 232)',
                    animation: {
                        duration: 3000
                    }
                });

                chart.addSeries(  {
                    name: "Sd1MinusData",
                    data: dataservice.getChartLineSd1MinusData(),
                    color: "rgb(187, 218, 228)",
                    animation: {
                    duration: 3000
                }
            });

                chart.addSeries( {
                    name: 'Sd2MinusValue',
                    data: dataservice.getChartLineSd2MinusData(),
                    color: "rgb(255, 255, 255)",
                    animation: {
                        duration: 3000
                    }
                });*/

                chart.redraw();

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
                //$scope.reflow();
                //$scope.chartConfig.getHighcharts()
            }
        }




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