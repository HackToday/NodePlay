'use strict';

var musicApp = angular.module('musicApp', [
  'ngRoute',
  'musicControllers'
]);

musicApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'MusicListCtrl'
      }).
      when('/songs/:songId', {
         templateUrl: 'partials/song-detail.html',
         controller: 'MusicDetailCtrl'
      }).
      otherwise({
         redirectTo: '/songs'
      });
   }]);

