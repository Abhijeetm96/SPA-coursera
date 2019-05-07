 (function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
$scope.name ="Abhijeet Kumar";

$scope.sayHello = function (){
  return "Hello Coursera ";
};
});

})();
