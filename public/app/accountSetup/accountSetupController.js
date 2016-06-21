"use strict";
app.controller("accountSetupController", ["$scope", "$location","$http", "$routeParams", "Upload","userFactory", function ($scope, $location, $http, $routeParams, Upload, userFactory) {
	console.log("got to artist view controller");

	var currentUser = userFactory.getUserData();



}]);