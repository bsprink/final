//alert();

var app = angular.module('spaceApp', []);
app.controller('spaceCtrl', function($scope, $http) {
    $scope.func = function(){
    	alert();
console.log("https://api.nasa.gov/EPIC/api/natural/date/" + $("#dateInputArea").val() + "?api_key=7KQEYiAF5zeVxe4ozOXjBieqCtwMPrBpUAAKwUER")
    	$http.get("https://api.nasa.gov/EPIC/api/natural/date/" + $("#dateInputArea").val() + "?api_key=7KQEYiAF5zeVxe4ozOXjBieqCtwMPrBpUAAKwUER")
    	.then(function(response){
    		$scope.space = response.data;
            console.log($scope.space);

    	});
    };
});
