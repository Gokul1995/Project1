angular.module('app')
    .factory('localStorageFactory', ['$window', localStorageFactory]);

function localStorageFactory($window) {

    return {
        save: save,
        get: get,
        clear: clear

    }


    function save(key, value) {
        // console.log('From from session factory : ' , $window.sessionStorage.getItem('name'));
        $window.sessionStorage.setItem(key, newValue);


    }

    function get(key) {
        return $window.sessionStorage.getItem(key);
    }

    function clear() {
        $window.sessionStorage.clear();
    }

}

