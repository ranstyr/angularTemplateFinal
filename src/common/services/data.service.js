/**
 * Created by ran.styr on 07-Feb-16.
 */

(function () {


// dataservice factory
    angular
        .module('project')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$rootScope'];

    function dataservice($http , $q , $localStorage , constants , $rootScope ) {
    //todo logger
    //todo private method vs public
        var queryParametres = {};
        var maxColor = 'rgb(136, 192, 87)';
        var minColor = 'rgb(237, 114, 97)';
        var portfolioData;
        var age;
        var CalculatedAge;
        var targetTime;
        var CalculatedTargetTime;
        var timeFactor;
        var initialDeposit;
        var monthlyDeposit;
        var monthlySalary;
        var clientLiquidAssets;
        var describe;
        var T;
        var A;
        var B;
        var C;
        var D;
        var portfolioExposure;
        var finalRiskFactor;
        var matrix = [
            [10, 9, 8, 7, 6, 5, 10, 9, 8, 7, 6, 5, 8, 7, 6, 5, 4, 3],
            [9, 8, 7, 6, 5, 5, 10, 9, 8, 7, 6, 5, 7, 6, 5, 4, 3, 3],
            [8, 7, 6, 6, 5, 4, 10, 9, 8, 7, 6, 5, 6, 5, 4, 4, 3, 2],
            [7, 6, 6, 5, 4, 4, 9, 8, 8, 7, 6, 5, 5, 4, 4, 3, 2, 2],
            [6, 5, 5, 4, 4, 3, 8, 7, 7, 6, 6, 5, 4, 3, 3, 2, 2, 1],
            [5, 5, 4, 4, 3, 3, 7, 7, 6, 6, 5, 5, 3, 3, 2, 2, 1, 1],
            [5, 4, 4, 3, 3, 2, 7, 6, 6, 5, 5, 4, 3, 2, 2, 1, 1, 1],
            [4, 4, 3, 3, 2, 2, 6, 6, 5, 5, 4, 4, 2, 2, 1, 1, 1, 1],
            [4, 3, 3, 2, 2, 2, 6, 5, 5, 4, 4, 4, 2, 1, 1, 1, 1, 1],
            [3, 3, 2, 2, 2, 2, 5, 5, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1]
        ];
        var matrixSecondParams;
        var matrixFirstParams;
        var chartBarData;
        var barChartYearData = [];
        var barChartRevenuesData = [];
        var min;
        var chartlineData = [];
        var chartLinesSd2MinusData = [];
        var chartLinesSd1MinusData = [];
        var chartLineSd1PlusData = [];
        var chartLineSd2PlusData = [];
        var chartLineYearData = [];
        var chartPieLevel4Data = [];
        var chartPieLevel3Data = [];
        var barChartColorArray = [];
        var sectorState = false;

        $(window).on('riskSliderUserChange', function (event , risk) {
            console.log ("value / label" + risk);
            getPortfoliofromRisk(risk)

        });

/*        $(window).on('checkboxChnage', function (event , secState) {
            console.log ("state" + secState);
            if (sectorState===true && secState===false){
                sectorState = secState
                $rootScope.$broadcast('angularSliderTextChnage', queryParametres);
            }
            sectorState = secState
        });*/


        var service = {
            getPortfolio: getPortfolio,
            getBarChartYearData : getBarChartYearData,
            getMinValue : getMinValue,
            getBarChartRevenuesData : getBarChartRevenuesData,
            getChartLineSd2MinusData : getChartLineSd2MinusData,
            getChartLineSd1MinusData: getChartLineSd1MinusData,
            getChartLineSd1PlusData : getChartLineSd1PlusData,
            getChartLineSd2PlusData : getChartLineSd2PlusData,
            getChartLineYearData : getChartLineYearData,
            getChartPieLevel3Data : getChartPieLevel3Data,
            getChartPieLevel4Data : getChartPieLevel4Data,
            getInitialDeposit : getInitialDeposit,
            getBarChartColorsArray : getBarChartColorsArray

        };
        return service;

/*
        function getAvengers() {
            return $http.get('/api/maa')
                .then(getAvengersComplete)
                .catch(getAvengersFailed);

            function getAvengersComplete(response) {
                return response.data.results;
            }

            function getAvengersFailed(error) {
                logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }
*/


        function getPortfoliofromRisk(risk) {

            var url;
            //todo add deffer object
            //we can go to server only if the first 4 questions are filled

            //todo check if we need it as $http.get retrun promise
            var deferred = $q.defer();
            //todo modify from .length to the specific attributes


            if(queryParametres.sectorCheckbox===true && queryParametres.FinancialServices===true ){
                url = constants.DEV.getPortfolioSector  + risk + '.json';
            }else{
                url = constants.DEV.getPortfolio4  + risk + '.json';
            }

                $http.get(url).then(success , failed );


                function success(response) {

                    var data = {};
                        data = response.data;

                    if (data) {
                        $localStorage.attributes = data;

                        BEData = data;
                        calculateBarData();
                        calculateLineData();
                        calculateLevel3Pie();
                        calculateLevel4Pie();
                        deferred.resolve(data);

                        $rootScope.$broadcast('angularDataChanged', queryParametres);
                    }
                    else {
                        deferred.reject();
                    }
                }

                function failed(response) {
                    deferred.reject(response);
                }

                return deferred.promise;


        }


        function getPortfolio(queryParams) {

            queryParametres = queryParams;
            var calculatePortfolioRisk;
            var url;
            //todo add deffer object
            //we can go to server only if the first 4 questions are filled

            //todo check if we need it as $http.get retrun promise
            var deferred = $q.defer();
            //todo modify from .length to the specific attributes
            if (Object.keys(queryParams).length > 3) {
                calculatePortfolioRisk = calculatePortfolioRisk(queryParams);


                if (calculatePortfolioRisk >0 && calculatePortfolioRisk<11 ){

                    //update risk widget
                    //update risk widget value
                    $rootScope.$apply(function() {
                        jQuery('.risk-box .slider').slider({ /////// name of the slider
                            value: calculatePortfolioRisk /////// the value you need to set
                        }).trigger('slidechange');
                    });

                    //update risk widget label value
                    jQuery('.risk-box .tooltip-slider .label').text(calculatePortfolioRisk + ' - Advised')

                    //update risk widget position

                    jQuery('.risk-box .tooltip-slider').slider({
                        value: calculatePortfolioRisk
                    }).trigger('slidechange');

                   /* if ((!queryParams.Technology)){
                        url = constants.DEV.getPortfolio4  + calculatePortfolioRisk + '.json';
                    }else{
                        if( queryParams.Technology===false){
                            url = constants.DEV.getPortfolio4  + calculatePortfolioRisk + '.json';
                        }else if(queryParams.Technology===true){
                            url = constants.DEV.getPortfolioSector  + calculatePortfolioRisk + '.json';
                        }
                    }*/

                    if(queryParams.sectorCheckbox===true && queryParams.FinancialServices===true ){
                        url = constants.DEV.getPortfolioSector  + calculatePortfolioRisk + '.json';
                    }else{
                        url = constants.DEV.getPortfolio4  + calculatePortfolioRisk + '.json';
                    }

                        $http.get(url).then(success , failed );
                }


                function success(response) {

                    var data = response.data;

                    if (data) {
                        $localStorage.attributes = data;

                        BEData = data;
                        calculateBarData();
                        calculateLineData();
                        calculateLevel3Pie();
                        calculateLevel4Pie();
                        deferred.resolve(data);

                        $rootScope.$broadcast('angularDataChanged', queryParams);
                    }
                    else {
                        deferred.reject();
                    }
                }

                function failed(response) {
                    deferred.reject(response);
                }

                return deferred.promise;

            }

            function calculatePortfolioRisk() {
                age = +queryParams["Age"];
                targetTime = +queryParams["TargetTime"];
                calculateTimefactor();
                //take " , " and parse to int
/*                initialDeposit = parseInt(queryParams["InitialDeposit"].replace([","], ''));
                monthlyDeposit = parseInt(queryParams["MonthlyDeposit"].replace([","], ''));*/
                initialDeposit = parseInt(queryParams["InitialDeposit"]);
                monthlyDeposit = parseInt(queryParams["MonthlyDeposit"]);
                if (queryParams["Whatisyourannualincome"]) {
                    monthlySalary = parseInt(queryParams["Whatisyourannualincome"]);
/*
                    monthlySalary = parseInt(queryParams["Whatisyourannualincome"].replace([","], ''));
*/
                }
                if (queryParams["Whatisyourliquidassetsnetworth"]) {
                    clientLiquidAssets = parseInt(queryParams["Whatisyourliquidassetsnetworth"]);
                    //clientLiquidAssets = parseInt(queryParams["Whatisyourliquidassetsnetworth"].replace([","], ''));
                }

                if (queryParams["describe"]) {
                    describe = parseInt(queryParams["describe"]);
                }

                T = targetTime / 2;
                A = T * monthlyDeposit;
                if (!A){
                    A=0
                };
                B = T * monthlySalary;
                C = ((initialDeposit + A) / (clientLiquidAssets + A)) * 100;
                D = ((initialDeposit + A) / (clientLiquidAssets + (B * 0.5))) * 100;
                portfolioExposure = (C + D) / 2;
                if (portfolioExposure && describe && timeFactor) {
                    calculateMatrixFirstParams();
                    calculateMatrixSecondParams();
                    return calculateFinalFactor();
                }
            }

            function calculateFinalFactor() {
                //return data factor according to matrix
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("final factor" , matrix[matrixFirstParams][matrixSecondParams]);
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

                return matrix[matrixFirstParams][matrixSecondParams];
            }

            function calculateTimefactor() {

                if (age < 26) {
                    CalculatedAge = 10;
                } else if (age > 25 && age < 36) {
                    CalculatedAge = 9;
                } else if (age > 35 && age < 41) {
                    CalculatedAge = 8;
                } else if (age > 40 && age < 46) {
                    CalculatedAge = 7;
                } else if (age > 45) {
                    CalculatedAge = 6;
                } else {
                    CalculatedAge = 6;
                    console.log("!!!!!!!!!!!!!!!!error at calculateTimefactor CalculatedAge!!!!!!!!!!!");
                }
                ;

                if (targetTime < 6) {
                    CalculatedTargetTime = 5;
                } else if (targetTime > 5 && targetTime < 11) {
                    CalculatedTargetTime = 6;
                } else if (targetTime > 10 && targetTime < 16) {
                    CalculatedTargetTime = 7;
                } else if (targetTime > 15 && targetTime < 21) {
                    CalculatedTargetTime = 9;
                } else if (targetTime > 20) {
                    CalculatedTargetTime = 10;
                } else {
                    CalculatedTargetTime = 10;
                    console.log("!!!!!!!!!!!!!!!!error at calculateTimefactor targetTime !!!!!!!!!!!");
                }

                timeFactor = Math.min(CalculatedAge, CalculatedTargetTime);
                console.log('timeFactor = ' + timeFactor);

            }

            function calculateMatrixSecondParams() {
                if (describe === 1) {
                    switch (timeFactor) {
                        case 10:
                            matrixSecondParams = 0;
                            break;
                        case 9:
                            matrixSecondParams = 1;
                            break;
                        case 8:
                            matrixSecondParams = 2;
                            break;
                        case 7:
                            matrixSecondParams = 3;
                            break;
                        case 6:
                            matrixSecondParams = 4;
                            break;
                        case 5:
                            matrixSecondParams = 5;
                            break;
                    }
                }
                if (describe === 2) {
                    switch (timeFactor) {
                        case 10:
                            matrixSecondParams = 6;
                            break;
                        case 9:
                            matrixSecondParams = 7;
                            break;
                        case 8:
                            matrixSecondParams = 8;
                            break;
                        case 7:
                            matrixSecondParams = 9;
                            break;
                        case 6:
                            matrixSecondParams = 10;
                            break;
                        case 5:
                            matrixSecondParams = 11;
                            break;
                    }
                }
                if (describe === 3) {
                    switch (timeFactor) {
                        case 10:
                            matrixSecondParams = 12;
                            break;
                        case 9:
                            matrixSecondParams = 13;
                            break;
                        case 8:
                            matrixSecondParams = 14;
                            break;
                        case 7:
                            matrixSecondParams = 15;
                            break;
                        case 6:
                            matrixSecondParams = 16;
                            break;
                        case 5:
                            matrixSecondParams = 17;
                            break;
                    }
                }
                console.log('matrixSecondParams = ' + matrixSecondParams);
            }

            function calculateMatrixFirstParams() {
                if (portfolioExposure <= 11) {
                    matrixFirstParams = 0;
                } else if (portfolioExposure > 10 && portfolioExposure <= 20) {
                    matrixFirstParams = 1;
                } else if (portfolioExposure > 20 && portfolioExposure <= 30) {
                    matrixFirstParams = 2;
                } else if (portfolioExposure > 30 && portfolioExposure <= 40) {
                    matrixFirstParams = 3;
                } else if (portfolioExposure > 40 && portfolioExposure <= 50) {
                    matrixFirstParams = 4;
                } else if (portfolioExposure > 50 && portfolioExposure <= 60) {
                    matrixFirstParams = 5;
                } else if (portfolioExposure > 60 && portfolioExposure <= 70) {
                    matrixFirstParams = 6;
                } else if (portfolioExposure > 70 && portfolioExposure <= 80) {
                    matrixFirstParams = 7;
                } else if (portfolioExposure > 80 && portfolioExposure <= 90) {
                    matrixFirstParams = 8;
                } else if (portfolioExposure > 90) {
                    matrixFirstParams = 9;
                } else {
                    CalculatedAge = 9;
                    console.log("!!!!!!!!!!!!!!!!error at calculateMatrixFirstParams!!!!!!!!!!!");
                };
                console.log('matrixFirstParams = ' + matrixFirstParams);

            }


        }

        function getBarChartRevenuesData(){
            return barChartRevenuesData;
        }

        function getBarChartYearData(){
            return barChartYearData;
        }
        //bar chart
        function getMinValue(){
            return min
        }

        function getChartLineSd2MinusData(){
            return chartLinesSd2MinusData;
        }

        function getChartLineSd1MinusData(){
            return chartLinesSd1MinusData;
        }

        function getChartLineSd1PlusData(){
            return chartLineSd1PlusData;
        }

        function getChartLineSd2PlusData(){
            return chartLineSd2PlusData;
        }

        function getChartLineYearData(){
            return chartLineYearData;
        }

        function getChartPieLevel4Data(){
            return chartPieLevel4Data;
        }

        function getChartPieLevel3Data(){
            return chartPieLevel3Data;
        }

        function getPortfolioComplete(response) {
            return response.data.results;
        }

        function getPortfolioFailed(error) {
            logger.error('XHR Failed for getPortfolio.' + error.data);
        }

        function getInitialDeposit() {
            return initialDeposit;
        }


        function getBarChartColorsArray(){
            return barChartColorArray;
        }



        function calculateBarData(){
            barChartRevenuesData = {};
            barChartYearData={};
            chartBarData = {};
            chartBarData = BEData.performanceData;

            chartBarData.forEach(function(object , index , array){
                barChartRevenuesData[index] = object.revenues;
                barChartYearData[index] = object.year;

            });

            barChartRevenuesData = setMinMaxValueDataset ();


            function setMinMaxValueDataset () {
                 barChartColorArray = [
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
                ]
                //only one value for every year
                var valueArray = [];
                chartBarData.forEach(function (currentValue, index, array) {
                    valueArray.push(currentValue.revenues);
                })

                console.log("valueArray =  " + valueArray);

                valueArray.sort(function (a, b) {
                    return a - b;
                })

                var max = valueArray[valueArray.length - 1];
                min = valueArray[0];
                var setMax = false;
                var setMin = false;
                valueArray = [];

                chartBarData.forEach(function (currentValue, index, array) {
                    valueArray[index] = currentValue.revenues;
                    //set min and max values
                    if (chartBarData[index].revenues === max) {
/*                        valueArray[index] = {
                            y: currentValue.revenues,
                            color: maxColor
                        };*/
                        barChartColorArray[index] = maxColor;
                        setMax = true;
                    }
                    if (chartBarData[index].revenues === min) {
                       /* valueArray[index] = {
                            y: currentValue.revenues,
                            color: minColor
                        };*/
                        barChartColorArray[index] = minColor;
                        setMin = true;
                    }
                })
                if (!(setMax && setMin)) {
                    console.log("bug at setMinMaxValueDataset, no min value or no max value")
                }
                $localStorage.barChartRevenuesData = valueArray;
                barChartRevenuesData = valueArray;
                console.log("barChartRevenuesData = " , valueArray);
                return valueArray;
            }

        }

        function calculateLineData(){
            chartlineData = [];

            var SD1 = BEData.projectionData.averageSTD/100;
            var SD2 = SD1*2;
            var averageYearlyPerformance = BEData.projectionData.averageYearlyPerformance/100;
            var mDeposit = +monthlyDeposit || 0;

            chartlineData = BEData.projectionData.data;

/*
            chartlineData.splice(0, 0, chartlineData[0]);
            chartlineData[0].year = 2016;
*/

            for (var index = 0 ; chartlineData && index<chartlineData.length ; index++){
               //only the first yesr
                if (index === 0){
                    chartlineData[index]["sd2minus"] = initialDeposit;
                    chartlineData[index]["sd1minus"] = initialDeposit;
                    chartlineData[index]["Median"]  = initialDeposit;
                    chartlineData[index]["sd1plus"] = initialDeposit;
                    chartlineData[index]["sd2plus"] = initialDeposit;
                }
                //calculation for the rest of the years
                else{
                    chartlineData[index]["Median"] = chartlineData[index-1]["Median"]*(1+averageYearlyPerformance) + mDeposit*12;

                    chartlineData[index]["sd2minus"] = chartlineData[index]["Median"] - (chartlineData[index]["Median"]*SD2);
                    chartlineData[index]["sd1minus"] = chartlineData[index]["Median"] - (chartlineData[index]["Median"]*SD1);
                    chartlineData[index]["sd1plus"] = chartlineData[index]["Median"] + (chartlineData[index]["Median"]*SD1);
                    chartlineData[index]["sd2plus"] = chartlineData[index]["Median"] + (chartlineData[index]["Median"]*SD2);

                }

                chartLinesSd2MinusData[index] =  chartlineData[index].sd2minus;
                chartLinesSd1MinusData[index] =  chartlineData[index].sd1minus;
                chartLineSd1PlusData[index] =  chartlineData[index].sd1plus;
                chartLineSd2PlusData[index] =  chartlineData[index].sd2plus;
                chartLineYearData[index] =  chartlineData[index].year;

            }

            /*chartlineData.forEach(function(object , index , array){
                //first year
                if (index === 0){
                    array[index]["sd2minus"] = initialDeposit;
                    array[index]["sd1minus"] = initialDeposit;
                    array[index]["Median"]  = initialDeposit;
                    array[index]["sd1plus"] = initialDeposit;
                    array[index]["sd2plus"] = initialDeposit;
                }


                array[index]["Median"] = array[index-1]["Median"]*(1+averageYearlyPerformance) + monthlyDeposit*12;



                chartLinesSd2MinusData[index] = object.sd2minus;
                chartLinesSd1MinusData[index] = object.sd1minus;
                chartLineSd1PlusData[index] = object.sd1plus;
                chartLineSd2PlusData[index] = object.sd2plus;
                chartLineYearData[index] = object.year;

            });*/



        }

        function calculateLevel4Pie(){
            var assetBreakdownData = [];
            var assetBreakdownDataObject = {};
            //chartPieLevel4Data = BEData.performanceData;

            assetBreakdownDataObject.name = 'Brands';
            assetBreakdownDataObject.colorByPoint = true;
            assetBreakdownDataObject.size = '50%';
            assetBreakdownDataObject.innerSize = '40%';
            assetBreakdownDataObject.data = BEData.assetBreakdownData;
            assetBreakdownData[0] = assetBreakdownDataObject;

            chartPieLevel4Data.assetBreakdownData = assetBreakdownData;
            chartPieLevel4Data.InvestmentData = BEData.InvestmentData;

        }

        function calculateLevel3Pie(){
            var assetBreakdownData = [];
            var assetBreakdownDataObject = {};
            //chartPieLevel4Data = BEData.performanceData;

            assetBreakdownDataObject.name = 'Brands';
            assetBreakdownDataObject.colorByPoint = true;
            assetBreakdownDataObject.size = '50%';
            assetBreakdownDataObject.innerSize = '40%';
            assetBreakdownDataObject.data = BEData.assetBreakdownData3;
            assetBreakdownData[0] = assetBreakdownDataObject;

            chartPieLevel3Data.assetBreakdownData = assetBreakdownData;
            chartPieLevel3Data.InvestmentData = BEData.InvestmentData3;

        }

    }

})();


