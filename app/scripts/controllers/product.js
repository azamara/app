'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # ProductCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('ProductCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.productId = $routeParams.productId;
    }]
); // end module

$(document).ready(function(){
  $.get( "http://www.slrclub.com/bbs/zboard.php?id=used_market&category=1", function( data ) {
    $( "#tab1" ).html( data );
  });
});
w
