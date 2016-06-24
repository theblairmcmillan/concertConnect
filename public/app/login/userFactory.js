"use strict";

app.factory('userFactory', ["$location","$http", function ($location, $http) {

	var currentUser = {};

	return {

		getUserData: function(){
			return currentUser;
		}, 
		setUserData: function(userId){
			$http({
				method: 'GET',
				url: `/api/users/${userId}`,
			}).success(function(userData){
				console.log(userData);
				currentUser = userData;
			})
		},

	};


}]);