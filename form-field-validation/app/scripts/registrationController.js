angular.module('app')
    .controller('registrationController',[ 'localStorageFactory',localStorageFactory]) ;

        function localStorageFactory($scope) {
        var vm = this;
        // $scope.userName = 'Gokul Budha'
        
        $scope.regex = '\[A-z]*';
        $scope.passwordRegex = '\.{6,10}$';
 
        var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;
        var mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*).{7,8}$/;
        $scope.passwordStrength = "";
        $scope.isPasswordGoodEnough = false;
        $scope.$watch("password", function (newValue, oldValue) {
            if (newValue != oldValue) {
                if (strongPasswordRegex.test(newValue)) {
                    console.log('Strong Password.');
                    $scope.isPasswordGoodEnough = true;
                    $scope.passwordStrength = "Strong";
                } else if (mediumPasswordRegex.test(newValue)) {
                    $scope.passwordStrength = "Medium";
                    $scope.isPasswordGoodEnough = true;
                }
                else {
                    $scope.passwordStrength = "";
                    $scope.isPasswordGoodEnough = false;
                }
            }
        })

        $scope.signupUser = function(user) {
            console.log('The value for user registration is : ' , JSON.stringify(user));
         
            console.log('user name ' , user.userName)
            localStorageFactory.save('name', user.userName);

            console.log('Retriving Name from local storage : ' , localStorageFactory.get('name'))
        }



    }