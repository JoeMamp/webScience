var app = angular.module('newsApp', []);
app.controller('newsController', function($scope, $log, $http) {

  $scope.topics = [
    { name : "Arts" },
    { name : "Automobiles" },
    { name : "Books" },
    { name : "Business" },
    { name : "Fashion" },
    { name : "Food" },
    { name : "Health" },
    { name : "Home" },
    { name : "Insider" },
    { name : "Magazine" },
    { name : "Movies" },
    { name : "NYRegion" },
    { name : "Obituaries" },
    { name : "Opinion" },
    { name : "Politics" },
    { name : "RealEstate" },
    { name : "Science" },
    { name : "Sports" },
    { name : "SundayReview" },
    { name : "Technology" },
    { name : "Theater" },
    { name : "T-Magazine" },
    { name : "Travel" },
    { name : "Upshot" },
    { name : "US" },
    { name : "World" }
  ];

  $scope.getNews = function() {
    let query = "/makequery/" + $scope.keyW;
    $scope.getNews = $http.get(query).then().catch(err => {});
  };

  $scope.printNews = function( value ) {
    // alert(value);
    let query = "/getMongoData/" + value;

    $scope.news = $http.get(query).then(function (response) {
       $scope.news = response.data.results; // store data in scoped varible
    }, function (reason) {                    // function does not fire log error
      $scope.error = reason.data;
      $log.info(reason);
    });
  };

  $scope.getJSON = function() {
    let query = "/getJSON";
    $scope.getJSON = $http.get(query).then().catch(err => {});
  };

  $scope.getCSV = function() {
    let query = "/getCSV";
    $scope.getCSV = $http.get(query).then().catch(err => {});
  };

  $scope.clearDatabase = function() {
    let query = "/clearDatabase";
    $scope.clearDatabase = $http.get(query).then().catch(err => {});
  };

});