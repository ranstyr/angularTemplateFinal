/**
 * Created by ran.styr on 11/30/2015.
 */
(function() {

    angular
        .module('project')
        .controller('BarChartController', ['$scope', '$state', barChart]);

    function barChart( $scope) {

        $scope.chartSeries = [{
            data: [9.2, 3.4, 5.2, 0.2, -1.1, {
                y: -2.4,
                color: 'red'
            }, 6.7, 5.4, 2.8, 1.5, 12.1, 4.1, {
                y: 14.5,
                color: 'green'
            }, 13.2 , 11.9 , 3.4 , 9.3 ,8 , 6.7],
            color : 'rgb(74, 86, 104)',
            showInLegend: false
        }];

        $scope.chartConfig = {
            size : {
                width : 0
            },
            options: {
                chart: {
                    type: 'column',
                    margin: 60
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
            series: $scope.chartSeries,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ["1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004",
                    "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
                lineWidth: 0,
                minorTickLength: 0,
                tickLength: 0,
                minorGridLineWidth: 0,
            },
            yAxis: {
                visible: false,
                gridLineColor: 'transparent',
                min: -2.4,

                title: {
                    style: {
                        display: 'none'
                    },
                    text: ''
                }
            },
            Series:{
                visible: true
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
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

        $('#tab-3').on('tabChage3' , function(event , chartWidth){
            $scope.$apply(function() {
                $scope.chartConfig.size.width = (chartWidth -2);
            });
        });

    }


})();