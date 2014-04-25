define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		//console.log("defining routes...");
		
		$routeProvider.when('/', {
			templateUrl: 'views/home.html'
		});

		$routeProvider.when('/map', {
			templateUrl: 'views/map.html',
			controller: 'LocataireMapCtrl'
		});

		$routeProvider.otherwise({redirectTo: '/'});
		
	}]);

});