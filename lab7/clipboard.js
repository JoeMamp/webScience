$scope.getStats2 = function() {
  var b = [0, 0, 0, 0, 0, 0];

  for( var i = 0; i < $scope.buttons.length; i++ ) {
    let query = "/getMongoData/" + $scope.buttons[i].value;
    $http.get(query).then(function (response) {
      let data = response.data;
      for ( var j = 0; j < data.results.length; j++ ) {
        let a_num = Math.ceil(value.byline.split(" ").length/2 - 1);
        b[a_num-1] += 1;
      }
    }, function (reason) {
      $scope.error = reason.data;
      continue;
    });
  }

  $scope.authorValues = b;
};
// -----------------------------------------------------------------------------

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
        b[words.a_num-1] += 1;
      }
      return b;
    }, function (reason) {
      $scope.error = reason.data;
      continue;
    }).then( function (response) {
      alert(b[2]);
      $scope.authorValues = b;
    });
  }
};