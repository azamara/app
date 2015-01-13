'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function ($scope) {

    $scope.categoryTypeA = 0;
    $scope.categoryTypeB = 0;
    $scope.products = [];

    // 제품
    for( var i=0; i<6; i++ ){
      for( var x=0;x<5; x++ ){
        $scope.products.push(
        {'name': i + 'name' + x,
        'price': 1000,
        'imgSrc': 'images/product/a.jpg',
        'description':'description'+ x,
        'id':x,
        'categoryTypeA':i,
        'categoryTypeB':x
        });
      }
    }

    // 카테고리B
    $scope.categorysB = [
      {'code':0,'title':'ALL'},
      {'code':1,'title':'A'},
      {'code':2,'title':'B'},
      {'code':3,'title':'C'}
    ];

    // 카테고리B
    $scope.categorysA = [
      {'code':0,'title':'A'},
      {'code':1,'title':'B'},
      {'code':2,'title':'C'}
    ];


    // 카테고리 설정
    $scope.cateSel = function(item){
      $scope.categoryTypeA = item.code;
      $scope.categoryTypeB = 0;
      setTimeout(fixDiv,50);
    };

    $scope.cateSubSel = function(item){
      $scope.categoryTypeB = item.code;
      setTimeout(fixDiv,50);
    };

    $scope.isCateActive = function(item) {
      return $scope.categoryTypeA === item.code;
    };

    $scope.isCateSubActive = function(item) {
      return $scope.categoryTypeB === item.code;
    };

    $scope.isCateSubActive = function(item) {
      return $scope.categoryTypeB === item.code;
    };

    $scope.isViewProduct = function(item){
      if(
        $scope.categoryTypeA === item.categoryTypeA &&
        ($scope.categoryTypeB === 0 || $scope.categoryTypeB === item.categoryTypeB)
      ){
        return true;
      }else{
        return false;
      }
    }
}); // end module

// jquery menu fix
function fixDiv() {
  var left = $("#title").offset().left;
  var $cache = $('#navigation');
  if ($(window).scrollTop() > 50)
    $cache.css({'position': 'fixed', 'top': '10px', 'left' : (left - 200)+'px'});
  else
    $cache.css({'position': 'fixed', 'top': '100px', 'left' : (left - 200)+'px'});
}

$(document).ready(function(){
  $(window).scroll(fixDiv);
  $(window).resize(fixDiv);
  setTimeout(fixDiv,100);
});
