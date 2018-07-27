angular.module('app', ['ngRoute']);

angular.module('app')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl : '/app/views/home.html',
                controller: 'registrationController'
            })
            .when('/login', {
                templateUrl: '/app/views/login.html'
            })
            .when('/signup', {
                templateUrl: '/app/views/signup.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
}])