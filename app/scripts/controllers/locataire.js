define(['app', 'jquery'], function (app, $) {
	'use strict';
	return app.controller('LocataireCtrl', ['$scope',
		function($scope){

			var mapEl = $('#map');
			console.log(mapEl);
			new GoogleMap(mapEl);
		}
	])
});