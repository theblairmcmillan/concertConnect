"use strict";
app.controller("loginController", ["$scope", "$location","$http", "userFactory", function ($scope, $location, $http, userFactory) {

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
				userFactory.setUserData(data.user._id);
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
			console.log("data from signin!>>", data);
			if (data.success === true){
				userFactory.setUserData(data.user._id);
				$location.path('/accountSetup')
			} else {
				console.log(data.message);
			}
			
		})
	}

}]);