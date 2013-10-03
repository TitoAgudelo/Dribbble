'use strict';

var filters =  angular.module('dribbble.filters', []);

filters.filter('dabbbleDate', function ($filter) {
	return function (datestr, format) {
		return $filter('date')(Date.parse(datestr) || datestr, format);
	}
});