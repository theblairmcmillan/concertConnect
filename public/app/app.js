"use strict";

let app = angular.module("concertConnect", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider
        .when('/login', {
          templateUrl: "app/login/login.html",
          controller: "loginController"
        })
        .when('/artist/:id',{
        	templateUrl: "app/artistView/artistView.html",
        	controller: "artistViewController"
        })
        // .when('/host/:id',{
        // 	templateUrl: "app/hostView/hostView.html",
        // 	controller: "hostViewController"
        // })
    .otherwise({ redirectTo: '/login' });
});