"use strict";
app.controller("artistViewController", ["$scope", "$location","$http", "$routeParams", "Upload","userFactory", function ($scope, $location, $http, $routeParams, Upload, userFactory) {

	var currentUser = userFactory.getUserData();

	$scope.upload = function(file) {
		Upload.base64DataUrl(file).then(function(base64Urls){
			console.log("Image upload function triggered", currentUser._id);
			$http({
				method: 'POST',
				url: '/api/artists',
				data: {
					image: base64Urls,
					user: currentUser._id
				},
			}).success(function(data) {
				console.log("yas!", data);
			});
		});
	};

}]);

