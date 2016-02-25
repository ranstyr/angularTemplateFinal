/**
 * Created by ran.styr on 07-Feb-16.
 */

(function () {

        // dataservice factory
        angular
            .module('project')
            .constant('constants', {

                DEV: {
                    getPortfolio4: 'dataJSON/Portfolio',
                    getPortfolio3: 'dataJSON3/Portfolio',
                    getPortfolioSector: 'dataJSONSector/portfoliofinancial',
                },
                PROD: {}
            })

    })();