var app = angular.module('newsApp', ["chart.js"]);
app.controller('newsController', function($scope, $log, $http) {

  // Name is display name
  // value is for searching the database
  // active is whether or not it's viewable for the user

  $scope.buttons = [
    { name : "Arts" , value : "Arts" , active : "false" },
    { name : "Automobiles" , value : "Automobiles" , active : "false" },
    { name : "Books" , value : "Books" , active : "false" },
    { name : "Business" , value : "Business" , active : "false" },
    { name : "Fashion" , value : "Fashion" , active : "false" },
    { name : "Food" , value : "Food" , active : "false" },
    { name : "Health" , value : "Health" , active : "false" },
    { name : "Home" , value : "Home" , active : "true" },
    { name : "Insider" , value : "Insider" , active : "false" },
    { name : "The NYT Magazine" , value : "Magazine" , active : "false" },
    { name : "Movies" , value : "Movies" , active : "false" },
    { name : "New York" , value : "NYRegion" , active : "false" },
    { name : "Obituaries" , value : "Obituaries" , active : "false" },
    { name : "Op-Eds" , value : "Opinion" , active : "false" },
    { name : "Politics" , value : "Politics" , active : "false" },
    { name : "Real Estate" , value : "RealEstate" , active : "false" },
    { name : "Science" , value : "Science" , active : "false" },
    { name : "Sports" , value : "Sports" , active : "false" },
    { name : "Sunday Review" , value : "SundayReview" , active : "false" },
    { name : "Technology" , value : "Technology" , active : "false" },
    { name : "Theater" , value : "Theater" , active : "false" },
    { name : "T Magazine (Style)" , value : "T-Magazine" , active : "false" },
    { name : "Travel" , value : "Travel" , active : "false" },
    { name : "The Upshot" , value : "Upshot" , active : "false" },
    { name : "U.S. News" , value : "US" , active : "false" },
    { name : "World News" , value : "World" , active : "false" }
  ];

  $scope.getNews = function( value ) {  // Adds specific news items to the database
    for( var i = 0; i < $scope.buttons.length; i++ ) {
      if ( $scope.buttons[i].value == value ) {
        if ( $scope.buttons[i].active ) { $scope.buttons[i].active = false; }
        else {
          $scope.buttons[i].active = true;
        }
      }
    };
    let query = "/makequery/" + value;
    $scope.getNews = $http.get(query).then().catch(err => {});
    window.location.reload();
  };

  $scope.printNews = function() {
    newsArray = []; // This will hold the actual news data from the database
    for( var i = 0; i < $scope.buttons.length; i++ ) {
      let query = "/getMongoData/" + $scope.buttons[i].value;
      $http.get(query).then(function (response) {
        var data = response.data;
        for( var j = 0; j < data.results.length; j++ ) {
          newsArray.push(data.results[j]);
        };
      }, function (reason) {                    // function does not fire log error
        $scope.error = reason.data;
        continue;
        // $log.info(reason);
      });
    };
    $scope.news = newsArray;
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
    for( var i = 0; i < $scope.buttons.length; i++ ) {
      $scope.buttons[i].active = false;
      document.getElementById($scope.buttons.value).setAttribute( "aria-expanded", false ).innerHTML = 'aria-pressed="false"';
    };
  };

  var topics = ["Arts", "Automobiles", "Books", "Business", "Fashion",
                      "Food", "Health", "Home", "Insider", "Magazine", "Movies",
                      "NYRegion", "Obituaries", "Opinion", "Politics",
                      "RealEstate", "Science", "Sports", "SundayReview",
                      "Technology", "Theater", "T-Magazine", "Travel", "Upshot",
                      "US", "World"];
  $scope.series = ["Articles"];

  $scope.getStats1 = function() {
    let section = "";
    let num = 0;
    categories = [];
    resultSizes = [];

    for( var i = 0; i < $scope.buttons.length; i++ ) {
      let query = "/getMongoData/" + $scope.buttons[i].value;
      $http.get(query).then(function (response) {
        let data = response.data;
        section = data.results[0].section;
        categories.push(section);
        num = data.results.length;
        resultSizes.push(num);
      }, function (reason) {
        $scope.error = reason.data;
        continue;
      });
    }

    $scope.categories = categories;
    $scope.resultSizes = resultSizes;
  };

  $scope.authorKeys = [1, 2, 3, 4, 5, 6];;
  $scope.getStats2 = function() {
    var b = [0, 0, 0, 0, 0, 0];

    for( var i = 0; i < $scope.buttons.length; i++ ) {
      let query = "/getMongoData/" + $scope.buttons[i].value;

      $http.get(query).then(function (response) {
        let data = response.data;
        for ( var j = 0; j < data.results.length; j++ ) {
          let str = data.results[j].byline;
          let words = str.split(" ");
          let a_num = Math.ceil((words.length/2)-1);
          b[a_num-1] += 1;
        }
        return b;
      }, function (reason) {
        $scope.error = reason.data;
        continue;
      }).then( function (response) {
        $scope.authorValues = b;
      });
    }
  };

});

// new Promise(function(resolve, reject) {
//
//   let section = "";
//   let num = 0;
//   categories = [];
//   resultSizes = [];
//   a = [1, 2, 3, 4, 5, 6];
//   b = [0, 0, 0, 0, 0, 0];
//
//   for( var i = 0; i < $scope.buttons.length; i++ ) {
//
//     let query = "/getMongoData/" + $scope.buttons[i].value;
//
//     $http.get(query).then(function (response) {
//       let data = response.data;
//       section = data.results[0].section;
//       categories.push(section);
//       num = data.results.length;
//       resultSizes.push(num);
//       for ( var j = 0; j < num; j++ ) {
//         let str = data.results[j].byline;
//         let words = str.split(" ");
//         let a_num = Math.ceil((words.length/2)-1);
//         b[words.a_num-1] += 1;
//       }
//     }, function (reason) {
//       $scope.error = reason.data;
//       continue;
//     });
//
//   }
//
//   var result = [categories, resultSizes, a, b];
//   setTimeout(() => resolve(result), 1000);
// }).then(function(result) {
//   $scope.categories = result[0];
//   $scope.resultSizes = result[1];
//   $scope.authorKeys = result[2];
//   $scope.authorValues = result[3];
//   // alert(b[4]);
//   // alert(result);
//   return 3;
//
// }).then(function(result) {
//
//   alert(result);
//   return result * 4;
//
// }).then(function(result) {
//
//   alert(result);
//   return result * 6;
//
// });