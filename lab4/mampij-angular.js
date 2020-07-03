var app = angular.module("myApp", []);
var filename = "callData.json";

app.controller("main", function($scope, $http, $log) {
  $scope.getJSON = $http.get(filename).then(function(response) {
    $scope.getJSON = response.data;
    $scope.songLyrics = $scope.getJSON.lyrics;
  }, function (response) {
     $scope.error = response.data;
     $log.info(respone);
  });
});