'use strict';

var musicServices = angular.module('musicServices', ['ngResource']);

musicServices.factory('Song', ['$resource',
  function($resource) {
    return $resource('songs/:songId.json', {}, {
      query: {method:'GET', params:{songId:'songs'}, isArray:true}
    });
  }]);
