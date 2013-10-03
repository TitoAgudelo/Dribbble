"use strict";

var app = angular.module('dribbble', [
		'dribbble.controllers',
		'dribbble.filters',
		'dribbble.directives',
		'dribbble.services'
	]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/shots/:id", {controller: "ShotCtrl", templateUrl: "partials/shot.html"})
		.when("/:list", {controller: "ShotListCtrl", templateUrl: "partials/shot_list.html"})
    	.otherwise({redirectTo: "/popular"})
}])