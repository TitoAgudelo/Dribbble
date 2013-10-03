'use strict';

var services =  angular.module('dribbble.services', []);

services.factory('dribbble', function ($http) {
	function load (path, params) {
		params = params || {};
		params.callback = "JSON_CALLBACK";
		return $http.jsonp("http://api.dribbble.com" + path, {params: params});
	}

	return {
		shot: function (id) {
			var result = {};
			load ("/shots/" + id).then(function (data) {
				angular.copy(data.data, result)
			});

			return result;
		},

		shots: function (type, params) {
			params = params || {};
			return load("/shots/" + type, params)
		},

		comments: function (id, params) {
			params = params || {};
			return load("/shots/" + id + "/comments", params)
		},

		rebounds: function (id, params) {
			params = params || {};
			return load("/shots/" + id + "/rebounds", params)
		}
	}
})

services.factory('PagedResult', function (dribbble) {
	return function PagedResult (method, arg, collection_name) {
		var self = this;
		self.page = 0;
		var collection = this[collection_name] = [];

		this.loadNextPage = function () {
			dribbble[method](arg, {page: self.page + 1}).then(function (data) {
				self.page = data.data.page;
				self.pages = data.data.pages;
				self.per_page = data.data.per_page;
				[].push.apply(collection, data.data[collection_name])
			})
			return this;
		}
	}
})