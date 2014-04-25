define(['app'], function (app) {
	'use strict';
	return app.controller('MainCtrl', ['$scope', '$location',
		function($scope, $location){
			console.log("Initializing Main controller");

			$scope.go = function ( path ) {
			  $location.path( path );
			};
			
		}
	]);
});