"use strict";

app.factory('userFactory', ["$location", function ($location) {

	var currentUser = {};

	return {

		getUserData: function(){
			return currentUser;
		}, 
		setUserData: function(currentUserData){
			currentUser = currentUserData;
		}
	};
}]);