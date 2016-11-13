// 'use strict';
//
// module.exports = function($scope,$http) {
//
//
// var b=$scope.ratingMod.moviename;
// var m_name=$scope.ratingMod.moviename;
//
//   $http.get('/signup/ratingDispl/'+b).success(function (response) {
//     //alert(response);
//   $scope.ratecount=0;
//      var count=0;
//      var i;
//      try
//     {
//         for(i=0;i<=response.length;i++)
//         {
//           count+=parseInt(response[i].ratingvalue);
//           //alert(response[i].ratingvalue);
//         }
//
//       }
//      catch(e){}
//       if(count>0)
//       {
//         $scope.ratecount=Math.round(count*100/(i*5));
//       }
//       //alert('rating : '+$scope.ratecount);
//       document.getElementById("rate").innerHTML=$scope.ratecount;
//       $rootScope.avgRating=$scope.ratecount;
// });
//
//
// $http.post('/rating/rating/'+m_name+'/'+r).success(function(response){
//
// });
// }
//
//
