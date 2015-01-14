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
  
});
