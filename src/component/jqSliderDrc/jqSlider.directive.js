/**
 * Created by Ran Styr
 */
(function (app) {

    angular
        .module('project')
        .directive('ngSliderDrc', ['$state', ngSliderDrc]);

    jqSlider.$inject = ['$state'];

    function linkFn(scope, elem, attrs) {
/*        var holder = jQuery(this);
        var slider = holder.find('.slider');
        var valueField = holder.find('.value');*/
        var sliderMin = parseInt(slider.data('min'), 10) || 0;
        var sliderMax = parseInt(slider.data('max'), 10) || 100;
        var sliderValue = parseInt(slider.data('value'), 10) || 0;
        var sliderStep = parseInt(slider.data('step'), 10) || 1;
        var sliderText = slider.data('text');
        //var resultField = jQuery(slider.data('result'));


        $(elem).slider({
                range: 'min',
                value: sliderValue,
                min: sliderMin,
                max: sliderMax,
                step: sliderStep,
                disabled: slider.data('disabled') || false,
                slide: function(event, ui) {
                    value: +scope.model,
                    $scope.apply(function() {
                        scope.value = ui.value;
                        //refreshText();
                        //todo think if i need to adjust money-slider
                    });

                }
        });

        function refreshText() {
            if (slider.hasClass('money-slider')) {
                var value = (sliderText ? sliderText : '') + formatToMoney(Math.max(sliderValue, sliderMin), 0);
                valueField.val(value);
                if (resultField.length) {
                    resultField.text(value);
                }
            } else {
                valueField.val(Math.max(sliderValue, sliderMin) + (sliderText ? (' ' + sliderText) : ''));
            }
        }

        function formatToMoney(n, c) {
            c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = '.',
                t = ',',
                s = n < 0 ? '-' : '',
                i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '',
                j = (j = i.length) > 3 ? j % 3 : 0;
            return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
        }

        function formatFromMonney(currency) {
            return Number(currency.replace(/[^0-9\.]+/g, ''));
        }

        //refreshText();
    }


    function ngSliderDrc($state) {

        return {
            restrict: 'A',
            scope: {
                'model': '='
            },
            link: linkFn
        };


    }

})();