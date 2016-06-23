"use strict";
app.controller("artistViewController", ["$scope", "$location","$http", "$routeParams", "$timeout", "Upload", "userFactory", 
function ($scope, $location, $http, $routeParams, $timeout, Upload, userFactory) {

	$scope.currentUser = {};
	$scope.bandcamp = "";
	$timeout(function() {
		$scope.currentUser = userFactory.getUserData();
		$("#bandcamp").html($scope.currentUser.artist.bandcamp)
		$("#twitter").html($scope.currentUser.artist.twitter)
		$("#youtube").html($scope.currentUser.artist.youtube)
		console.log(">>>>", $scope.currentUser);
	}, 2000);


	



	$scope.upload = function(file) {
		Upload.base64DataUrl(file).then(function(base64Urls){
			console.log("Image upload function triggered", $scope.currentUser._id);
			$http({
				method: 'POST',
				url: '/api/artists',
				data: {
					image: base64Urls,
					user: $scope.currentUser._id
				},
			}).success(function(data) {
				console.log("yas!", data);
				$scope.currentUser.artist.image = data.image;
				console.log($scope.currentUser.artist.image);
				userFactory.setUserData($scope.currentUser._id);
			});
		});
	};

	$scope.updatestats = function(hometown, age, genre, group_size, website, tel){
		console.log("Inside the update stats function");
		console.log(">>>>>>>>>>>>>>>>>>>", $scope.currentUser);
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				hometown: hometown,
				age: age,
				genre: genre,
				group_size: group_size,
				website: website,
				tel: tel
			}
		}).success(function(data){
			console.log("stats worked", data);
			$scope.currentUser.artist.hometown = data.artist.hometown;
			$scope.currentUser.artist.age = data.artist.age;
			$scope.currentUser.artist.genre = data.artist.genre;
			$scope.currentUser.artist.group_size = data.artist.group_size;
			$scope.currentUser.artist.website = data.artist.website;
			$scope.currentUser.artist.tel = data.artist.tel;
			userFactory.setUserData($scope.currentUser._id);

		})
	};

	// UPDATE ABOUT SECTION //
	$scope.updateAbout = function(updateAboutField){
		console.log("got inside update about");
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				about: updateAboutField
			}
		}).success(function(data){
			$scope.currentUser.artist.about = data.about;
			userFactory.setUserData($scope.currentUser._id);
		})
	};

	// UPDATE BANDCAMP // 
	$scope.bandcampUpload = function(bandcampString){
		console.log("got inside bandcamp function");
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				bandcamp: bandcampString
			}
		}).success(function(data){
			console.log(data);
			$("#bandcamp").html(data.bandcamp)
			userFactory.setUserData($scope.currentUser._id);
		})
	};

	// UPDATE TWITTER //
	$scope.twitterUpload = function(twitterString){
		console.log("got inside twitter upload");
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				twitter: twitterString
			}
		}).success(function(data){
			console.log("twittersuccess", data);
			$("twitter").html(data.twitter)
			userFactory.setUserData($scope.currentUser._id);
		})
	};


	// UPDATE YOUTUBE //
	$scope.youtubeUpload = function(youtubeString){
		console.log("getting inside youtube fnct");
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				youtube: youtubeString
			}
		}).success(function(data){
			console.log("youtubesuccess", data);
			$("youtube").html(data.youtube)
			userFactory.setUserData($scope.currentUser._id)
		})
	};









}]);

