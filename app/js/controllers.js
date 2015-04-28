'use strict';

var musicApp = angular.module('musicApp', []);

musicApp.controller('MusicListCtrl', function($scope) {
  $scope.songs = [
    { 'name' : 'See you again',
      'snippet': 'A lovely song for the lost'},
    { 'name' : 'Hit now',
      'snippet': 'A hot song for the lazy people'},
    { 'name' : 'Sunset',
      'snippet': 'A peaceful song for enjoy'}
  ];
});
