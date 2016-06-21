"use strict";

let app = angular.module("concertConnect", ["ngRoute", "ngFileUpload"]);

app.config(function($routeProvider) {

    $routeProvider
        .when('/login', {
          templateUrl: "app/login/login.html",
          controller: "loginController"
        })
        .when('/artists',{
        	templateUrl: "app/artist/artistView.html",
        	controller: "artistViewController"
        })
        .when('/hosts/:id',{
        	templateUrl: "app/hostView/hostView.html",
        	controller: "hostViewController"
        })
        .when('/accountSetup',{
            templateUrl: "app/accountSetup/accountSetupView.html",
            controller: "accountSetupController"
        })
    .otherwise({ redirectTo: '/login' });
});