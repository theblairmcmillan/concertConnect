"use strict";

app.factory('userFactory', ["$location","$http", function ($location, $http) {

	var userId = localStorage.getItem('userId');
	userId = JSON.parse(userId);
	console.log("LOCAL STORAGE:", userId);

	var currentUser = {};
	$http({
		method: 'GET',
		url: `/api/users/${userId.id}`,
	}).success(function(userData){
		console.log(userData);
		currentUser = userData;
	})



	return {

		getUserData: function(){
			return currentUser;
		}, 
		setUserData: function(){
			$http({
				method: 'GET',
				url: `/api/users/${userId.id}`,
			}).success(function(userData){
				console.log(userData);
				currentUser = userData;
			})
		},

	};


}]);