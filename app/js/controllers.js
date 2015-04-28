'use strict';

var musicApp = angular.module('musicApp', []);

musicApp.controller('MusicListCtrl', function($scope) {
  $scope.songs = [
    { 'name' : 'See you again',
      'time' : 1984,
      'snippet': 'A lovely song for the lost'},
    { 'name' : 'Hit now',
      'time' : 1996,
      'snippet': 'A hot song for the lazy people'},
    { 'name' : 'Sunset',
      'time' : 2009,
      'snippet': 'A peaceful song for enjoy'}
  ];

  $scope.orderProp = 'time'
});
