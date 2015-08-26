'use strict';

// Declare app level module which depends on views, and components
angular.module('calendar_app', [
    'ngRoute',
    'calendar_app.view1',
    'calendar_app.view2',
    'calendar_app.version'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
