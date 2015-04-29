'use strict';

var musicControllers = angular.module('musicControllers', []);

musicControllers.controller('MusicListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('songs/songs.json').success(function(data) {
      $scope.songs = data;
    });
  $scope.orderProp = 'length'
  }]);

musicControllers.controller('MusicDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('songs/' + $routeParams.songId + '.json').success(function(data) {
      $scope.song = data;
    });
  }]);

