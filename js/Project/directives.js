'use strict';

var directives = angular.module('dribbble.directives', []);

directives.directive('shotList', function () {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: "patials/shot_list.html",
		scope: {
			shots: "=shotList"
		}
	}
});