"use strict";
app.controller("loginController", ["$scope", "$location","$http", function ($scope, $location, $http) {
	console.log("got here!");

	$scope.signupArtist = (email, password) => {
		$http.post(`/api/artists/signup/${email}/${password}`, function(data, err) {
			console.log("data", data);
		})
	}

}]);