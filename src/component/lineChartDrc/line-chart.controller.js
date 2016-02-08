/**
 * Created by ran.styr on 11/30/2015.
 */
(function () {

    angular
        .module('project')
        .controller('LineChartController', ['$scope', '$state', lineChart]);

    function lineChart($scope , $element) {
        $scope.chartSeries = [
                {
                    name: 'My First dataset',
                    data: [15000, 16500, 18000, 19500, 21000, 22500, 24000, 25500, 27000, 28500],
                    color: "rgba(220,220,220,0.2)"
                },
                {
                    name: "My Second dataset",
                    data: [15300, 16800, 18300, 19800, 21300, 22800, 24500, 26200, 27700, 29200],
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "My third dataset",
                    data: [16000, 17500, 19000, 20500, 22000, 23500, 25400, 27000, 28500, 30000],
                    color: "rgba(151,187,205,0.2)"
                },
                {
                    name: "white",
                    data: [15000, 16500, 18000, 19500, 21000, 22500, 24000, 25500, 27000, 28500],
                    color: "white"
                }];

        $scope.chartConfig = {
            size : {
                width : 0
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
                categories: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023",
                    "2024"],
                title: {
                    enabled: false
                },
                tickLength: 0,
                tickmarkPlacement: 'on',
                min: 0.5,
                startOnTick: false,
                endOnTick: false,
                // 9 = categories.length
                max: 9-1.5
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

        $('#tab-2').on('tabChage2' , function(event , chartWidth){
            $scope.$apply(function() {
                $scope.chartConfig.size.width = (chartWidth -2);
            });
        });


    }


})();