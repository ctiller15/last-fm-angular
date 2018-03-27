const API_KEY = "770f66fa3ba5c6f2edb52bf531985f94";
const SHARED_SECRET = "1261c812bbb8183b4d8fe3a65bd6b051";

// let temp;

angular
  .module("mainApplication", [])
  .controller("mainController", ['$scope', '$http', ($scope, $http) => {
    $scope.name = "Angular";
    $scope.artists = [];

    $http({
      method:"GET",
      url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=770f66fa3ba5c6f2edb52bf531985f94&format=json'
    }).then(response => {
      // console.log(response);
      // console.log(response.data);
      $scope.artists = response.data.artists.artist;
      // console.log($scope.artists);
      // temp = $scope.artists;
    })
  }]);
