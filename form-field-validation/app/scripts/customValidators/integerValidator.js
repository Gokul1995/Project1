angular.module('app')
    .directive('integer', function() {
        var INTEGER_REGEXP = /^-?\d+$/;
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$validators.integer = function(modelValue, viewValue) {
                    if(ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    if(INTEGER_REGEXP.test(viewValue)) {
                        return true;
                    }
                    return false;
                }
            }
        }
    })