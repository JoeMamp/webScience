$scope.authorKeys = [1, 2, 3, 4, 5, 6];;
$scope.getStats2 = function() {
  var b = [0, 0, 0, 0, 0, 0];

  for( var i = 0; i < $scope.buttons.length; i++ ) {
    let query = "/getMongoData/" + $scope.buttons[i].value;

    $http.get(query).then(function (response) {
      let data = response.data;
        let a_num = Math.ceil(value.byline.split(" ").length/2 - 1);
        b[a_num-1] += 1;
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


$scope.getStats2 = async function someFunction() {
  let b = [0, 0, 0, 0, 0, 0];

  const myArray = [1, 2, 3];
  const connection = mysql.createPool({ options });
  let finalArray = myArray.map(async(value) => { // map instead of forEach
    const result = await asyncFunction(connection, value);
    finalValue.asyncFunctionValue = result.asyncFunctionValue;
    return finalValue; // important to return the value
  });
  const resolvedFinalArray = await Promise.all(finalArray); // resolving all promises
  return functionThatUsesResolvedValues(resolvedFinalArray);
};