/**
 * Created by ran.styr on 07-Feb-16.
 */

(function () {


// dataservice factory
    angular
        .module('project')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http, logger) {

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

        var service = {
            getPortfolio: getPortfolio
        };
        return service;

        activate()


        function activate(){



        }

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


        function getPortfolio(queryParams) {
            //todo add deffer object
            //we can go to server only if the first 4 questions are filled
            if (Object.keys(queryParams).length > 3){
                calculatePortfolioRisk(queryParams)
            } ;

            function calculatePortfolioRisk(){
                age = +queryParams["Age"];
                targetTime = +queryParams["TargetTime"];
                calculateTimefactor();
                //take " , " and parse to int
                initialDeposit = parseInt(queryParams["InitialDeposit"].replace([","], ''));
                monthlyDeposit = parseInt(queryParams["MonthlyDeposit"].replace([","], ''));
                if (queryParams["Whatisyourannualincome"]){
                    monthlySalary = parseInt(queryParams["Whatisyourannualincome"].replace([","], ''));
                }
                if  (queryParams["Whatisyourliquidassetsnetworth"]){
                    clientLiquidAssets = parseInt(queryParams["Whatisyourliquidassetsnetworth"].replace([","], ''));
                }
                //todo need to take it from thr check box
                describe = '1';

                T = targetTime/2;
                A = T*monthlyDeposit;
                B = T*monthlySalary;
                C = ((initialDeposit+ A) / (clientLiquidAssets +A))*100;
                D = ((initialDeposit+ A) / (clientLiquidAssets + (B*0.5)))*100;
                portfolioExposure = (C+D)/2;

                switch(describe) {
                    case 1:
                        //code block
                        break;
                    case 2:
                        //code block
                        break;
                    case 3:
                        //code block
                        break;
/*                    default:
                    default code block*/
                }

            }

            function calculateFinalFactor(){

            }

            function calculateTimefactor(){
                switch (age) {
                    case (function(){ if(age<26){return true} })():
                        CalculatedAge = 10;
                        break;
                    case (function(){ if(age>25 && age<36){return true} })():
                        CalculatedAge = 9;
                        break;
                    case (function(){ if(age>35 && age<41){return true} })():
                        CalculatedAge = 8;
                        break;
                    case (function(){ if(age>40 && age<46){return true} })():
                        CalculatedAge = 7;
                        break;
                    case (function(){ if(age>45){return true} })():
                        CalculatedAge = 6;
                        break;
                    default:
                        CalculatedAge = 6;
                        console.log("!!!!!!!!!!!!!!!!error at calculateTimefactor CalculatedAge!!!!!!!!!!!");
                }

                switch (targetTime) {
                    case (function(){ if(targetTime<6){return true} })():
                        CalculatedTargetTime = 5;
                        break;
                    case (function(){ if(targetTime>5 && targetTime<11){return true} })():
                        CalculatedTargetTime = 6;
                        break;
                    case (function(){ if(targetTime>10 && targetTime<16){return true} })():
                        CalculatedTargetTime = 7;
                        break;
                    case (function(){ if(targetTime>15 && targetTime<21){return true} })():
                        CalculatedTargetTime = 9;
                        break;
                    case (function(){ if(targetTime>20){return true} })():
                        CalculatedTargetTime = 10;
                        break;
                    default:
                        CalculatedTargetTime = 10;
                        console.log("!!!!!!!!!!!!!!!!error at calculateTimefactor targetTime !!!!!!!!!!!");
                }

                timeFactor = Math.min(CalculatedAge , CalculatedTargetTime);
            }
        }

    }


})();
