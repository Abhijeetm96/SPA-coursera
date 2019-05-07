(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.firstname = "";
  $scope.middlename = "";
  $scope.lastname = "";

  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.firstname + " " + $scope.middlename + " " + $scope.lastname);
    $scope.totalValue = totalNameValue;
  };


  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});


})();
