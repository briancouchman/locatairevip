define(['app', 'gmaps', 'jquery'], function (app, GMaps, $) {
	'use strict';
	return app.controller('ProprietaireCtrl', ['$scope',
		function($scope){
			//Initialize map
			var map = new GMaps({
				el: 'map_proprio',
				lat: 45.55, 
				lng: -73.5667,
				zoom: 10,
				enableNewStyle: true
			});

			var locations = [
				{	
					id: 1,
					address: "69 rue de la poudriere",
					price: 855
				
				},
				{				
					id: 2,
					address: "6087 rue Saint-Denis",
					price: 1035
				
				}
			]




			$scope.locations = locations;


		}
	])
});