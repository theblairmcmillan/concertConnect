"use strict";
app.controller("accountSetupController", ["$scope", "$location","$http", "$routeParams", "Upload","userFactory", function ($scope, $location, $http, $routeParams, Upload, userFactory) {

	var currentUser = userFactory.getUserData();

	$scope.setupAccount = function(artistCheckbox, hostCheckbox, artistName, hostName) {
		console.log("artist account request status", artistCheckbox, artistName);
		// console.log("host account request status", hostCheckbox);
		if (artistCheckbox == true) {
			$http({
				method: 'POST',
				url: `/api/artists`,
				data: {
					name: artistName,
					user: currentUser._id
				}
			}).success(function(artist) {
				console.log("new artist info:::", artist);	
				$http({
					method: 'PUT',
					url: `/api/users/${currentUser._id}`,
					data: {
						is_artist: true
					},
				}).success(function(data){
					console.log("This shit worked", data);
					// $location.path('/artists')
				})
			})
		} // END if artistCheckbox is true...

		// HOST checkout is true ... 
		if (hostCheckbox == true) {
			$http({
				method: 'POST',
				url: `/api/hosts`,
				data: {
					name: hostName,
					user: currentUser._id
				}
			}).success(function(host){
				console.log("new host info:::", host);
				$http({
					method: 'PUT',
					url: `/api/users/${currentUser._id}`,
					data: {
						is_host: true
					},
				}).success(function(data){
					console.log("This host function worked", data);
					// $location.path('/hosts')
				})
			})
		} 

	};
}]);










