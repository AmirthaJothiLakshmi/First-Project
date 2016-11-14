'use strict';

module.exports = function($scope,$http){
  //  $rootScope.bookingDetails=$scope.book;
// $scope.ss="";





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


// var refresh5 = function () {
//   $http.get('/movieinfo/movieinfo').success(function (response) {
// console.log('READ IS SUCCESSFUL');
// $scope.lastlist = response;
// $scope.last = "";
//   });
// };
//
// refresh5();

var refresh5 = function () {
  $http.get('/movieinfo/movieinfo').success(function (response) {
console.log('READ IS SUCCESSFUL');
$scope.lastlist = response;
$scope.last = "";
  });
};

refresh5();


var movieObj={};
$scope.getData = function(){
  console.log('Hi Welcome')
  $http.get('http://www.omdbapi.com/?t=' +$scope.movieObj.Title+ '&y='+ $scope.movieObj.Year+ '&plot=short&r=json').success(function (response) {
      console.log(response);
           for(var key in response){
      if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')
      {
      movieObj[key] = response[key];
      }

    console.log(movieObj);

      }
           refreshomdb();
  });
}





var refreshomdb = function () {
    $http.get('/movie/movie').success(function (response) {
        console.log('READ IS SUCCESSFUL');
        $scope.movieObj = response;
        $scope.movies = "";
    });
};


refreshomdb();


var refreshrate = function () {
      $http.get('/rating/rating').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.ratelist = response;
          $scope.rate = "";
      });
  };

  refreshrate();
};
