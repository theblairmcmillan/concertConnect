"use strict";
app.controller("artistViewController", ["$scope", "$location","$http", "$routeParams", "$timeout", "Upload", "userFactory", 
function ($scope, $location, $http, $routeParams, $timeout, Upload, userFactory) {

	var userId = localStorage.getItem('userId');
	userId = JSON.parse(userId);
	userFactory.setUserData(userId.id)

	$scope.allArtists;

	$scope.currentUser = {};
	$scope.bandcamp = "";

	$timeout(function() {
		$('.modal-backdrop').remove();
		$scope.currentUser = userFactory.getUserData();
		$scope.image = $scope.currentUser.artist.image || "";
		$scope.hometown = $scope.currentUser.artist.hometown || "";
		$scope.age = $scope.currentUser.artist.age || "";
		$scope.genre = $scope.currentUser.artist.genre || "";
		$scope.group_size = $scope.currentUser.artist.group_size || "";
		$scope.website = $scope.currentUser.artist.website || "";
		$scope.tel = $scope.currentUser.artist.tel || "";
		$scope.about = $scope.currentUser.artist.about || "";

		$("#bandcamp").html($scope.currentUser.artist.bandcamp)
		$("#twitter").html($scope.currentUser.artist.twitter)
		$("#youtube").html($scope.currentUser.artist.youtube)
		console.log(">>>>", $scope.currentUser);
	}, 2500);


	$scope.upload = function(file) {
		Upload.base64DataUrl(file).then(function(base64Urls){
			console.log("Image upload function triggered", $scope.currentUser._id);
			$http({
				method: 'POST',
				url: `/api/artists/${$scope.currentUser.artist._id}`,
				data: {
					image: base64Urls,
					user: $scope.currentUser._id
				},
			}).success(function(data) {
				$scope.image = data.image;
				userFactory.setUserData($scope.currentUser._id);
			});
		});
	};

	$scope.updatestats = function(){
		console.log("Inside the update stats function");
		console.log(">>>>>>>>>>>>>>>>>>>", $scope.currentUser);
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				hometown: $scope.hometown,
				age: $scope.age,
				genre: $scope.genre,
				group_size: $scope.group_size,
				website: $scope.website,
				tel: $scope.tel
			}
		}).success(function(artist){
			console.log("stats worked", artist);
			$scope.hometown = artist.hometown;
			$scope.age = artist.age;
			$scope.genre = artist.genre;
			$scope.group_size = artist.group_size;
			$scope.website = artist.website;
			$scope.tel = artist.tel;
			userFactory.setUserData($scope.currentUser._id);

		})
	};

	// UPDATE ABOUT SECTION //
	$scope.updateAbout = function(updateAboutField){
		console.log("got inside update about", $scope.currentUser.artist._id);
		$http({
			method: 'POST',
			url: `/api/artists/${$scope.currentUser.artist._id}`,
			data: {
				about: updateAboutField
			}
		}).success(function(data){
			console.log("update about: ", data);
			$scope.about = data.about;
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


	// GET ALL THE ARTSITS //
	$http({
		method: 'GET',
		url: `/api/artists`,
	}).success(function(artists){
		console.log(">!>!>!>!>!", artists);
		updateData(artists)
		
	})

	function updateData(data) {
		console.log("got to the update data functions", data);
		$scope.allArtists = data;
	}

	// LOGOUT FUNCTION
	$scope.logout = function(){
		console.log("logout working...lolz");
		localStorage.removeItem("userId");
	};









}]);

