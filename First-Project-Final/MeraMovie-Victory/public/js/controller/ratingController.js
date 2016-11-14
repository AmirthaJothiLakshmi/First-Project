'use strict';

module.exports = function($scope,$http,$location){
  //  $rootScope.bookingDetails=$scope.book;


$scope.alertr = function(){
  alert("Thanks For Rating");
}

$scope.homer = function () {
  $location.path('/home');

}


(function(){

    var user3 = function($http){

      var getUsers3 = function(username3){
            return $http.get('/movieinfo/movieinfo')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers3
      };

    };

    var module = angular.module('movieApp');
    module.factory('user3', user3);

}());


var refreshomdb = function () {
    $http.get('/movie/movie').success(function (response) {
        console.log('READ IS SUCCESSFUL');
        $scope.movieObj = response;
        $scope.movies = "";
    });
};

refreshomdb();


var refresh5 = function () {
  $http.get('/movieinfo/movieinfo').success(function (response) {
console.log('READ IS SUCCESSFUL');
$scope.lastlist = response;
$scope.last = "";
  });
};
refresh5();


var refreshrate = function () {
        $http.get('/rating/rating').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.ratelist = response;
            $scope.rate = "";
        });
    };

refreshrate();


};
