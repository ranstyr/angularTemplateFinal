/**
 * Created by ran.styr
 */
(function() {

    angular
        .module('project')
        .controller('PieChartController', ['$scope', '$state', pieChart]);

    function pieChart( $scope) {
        $scope.chartSeries = [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'developed equities',
                y: 77,
                color : '#9577a4'
            }, {
                name: 'governement bonds, developed market',
                y: 11,
                sliced: true,
                selected: true,
                color : '#758938'
            }, {
                name: 'corporate bonds',
                y: 7,
                color : '#86a33f',
                sliced: true,
                selected: true
            }, {
                name: 'other',
                y: 3,
                color : '#675371'
            }, {
                name: 'emerging market equties',
                y: 2,
                color : '#7e678b'
            }],
            size: '50%',
            innerSize: '40%'
        }];

        $scope.chartConfig = {
            options: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
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
                            maxStaggerLines:1
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
            },
            tooltip: {
                pointFormat: '{series.name}: <br>{point.percentage:.1f}%</br>'
            },
            credits: {
                enabled: true
            },
            loading: false,

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

    }


})();