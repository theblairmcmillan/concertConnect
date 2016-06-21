"use strict";
app.controller("loginController", ["$scope", "$location","$http", "userFactory", function ($scope, $location, $http, userFactory) {
	console.log("got to login controller!");


	$scope.login = (email, password) => {
		$http({
			method: 'POST',
			url: '/api/login/users',
			data: {
				email: email,
				password: password
			},
		}).success(function(data) {
			console.log("data from login!>>", data.message);
			if (data.success === true) {
				console.log("user: ", data.user);
				userFactory.setUserData(data.user);
				$location.path('/artists')
			} else {
				console.log(data.message);
			}

		})
	}

	$scope.signup = (signupEmail, signupPassword) => {
		$http({
			method: 'POST',
			url: '/api/signup/users',
			data: {
				email: signupEmail,
				password: signupPassword
			},
		}).success(function(data){
			console.log("data from signin!>>", data.message);
			if (data.success === true){
				console.log("user:", data.user);
				userFactory.setUserData(data.user);
				$location.path('/artists')
			} else {
				console.log(data.message);
			}
			
		})
	}

}]);