'use strict';

module.exports = function($scope,$http,$location,$rootScope){
  // $scope.book = $rootScope.paymentInfo;
  $scope.book = $rootScope.bookingDetails;
console.log($scope.book);


$scope.alert = function(){ alert("Ticket booked successfully");
}


$scope.home1 = function () { $location.path('/home');

}
};
