/**
 * Created by Ran Styr
 */
(function() {

    angular
        .module('project')
        .controller('RiskSliderController', RiskSliderController);

    RiskSliderController.$inject = ['$http' , '$q' , '$localStorage' , 'constants' ,'$scope', '$state' ,'dataservice' ,'$rootScope'];


    function RiskSliderController( $http , $q , $localStorage , constants ,$scope, $state ,dataservice , $rootScope) {

        var vm = this;

    }

})();