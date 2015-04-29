'use strict';

var musicControllers = angular.module('musicControllers', []);

musicControllers.controller('MusicListCtrl', ['$scope', 'Song',
  function($scope, Song) {
    $scope.songs = Song.query();
    $scope.orderProp = 'length'
  }]);

musicControllers.controller('MusicDetailCtrl', ['$scope', '$routeParams', 'Song',
  function($scope, $routeParams, Song) {
    $scope.song = Song.get({songId: $routeParams.songId});
  }]);

