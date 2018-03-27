const API_KEY = "770f66fa3ba5c6f2edb52bf531985f94";
const SHARED_SECRET = "1261c812bbb8183b4d8fe3a65bd6b051";

angular
  .module("mainApplication", [])
  .controller("mainController", ['$scope', '$http', ($scope, $http) => {
    $scope.name = "Angular";
  }]);
