"use strict";

app.factory('userFactory', ["$location","$http", function ($location, $http) {

	var currentUser = {};


	return {

		getUserData: function(){
			return currentUser;
		}, 
		setUserData: function(currentUserId){
			$http({
				method: 'GET',
				url: `/api/users/${currentUserId}`,
			}).success(function(userData){
				console.log(userData);
				currentUser = userData;
			})
		},

	};


}]);