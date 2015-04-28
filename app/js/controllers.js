'use strict';

var musicApp = angular.module('musicApp', []);

musicApp.controller('MusicListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('songs/songs.json').success(function(data) {
      $scope.songs = data;
    });
  $scope.orderProp = 'length'
}]);
