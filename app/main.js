require.config({
	baseUrl: "scripts",
	paths: {
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		jquery: '../bower_components/jquery/jquery',
		'domReady' : '../bower_components/requirejs-domready/domReady',
		'async' : '../bower_components/requirejs-plugins/src/async',
		'GoogleMap' : '../bower_components/requirejs-google-maps/dist/GoogleMap',
		'gmaps': '../bower_components/gmaps/gmaps-amd',
		'mapCluster': '../bower_components/gmaps/markerclusterer',
		'jqplot' : '../jqplot.module',
		'bootstrap' : '../bower_components/bootstrap/dist/js/bootstrap',
		'd3' : '../bower_components/d3/d3.min',
		'typeahead' : '../bower_components/typeahead.js/dist/typeahead',
		'facebook': '//connect.facebook.net/en_US/all'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'jqplot': {
			deps:['jquery'],
			'exports':'jqplot'
		},
		'bootstrap': {
			deps:['jquery'],
			'exports':'bootstrap'
		},
		'gmaps': {
			deps: ['mapCluster'],
			'exports':'gmaps'
		},
		'd3': { 'exports': 'd3'},
		'typeahead': {
			deps: ['jquery'],
			'exports':'typeahead'
		},
		'facebook' : {'exports': 'FB'}
	},
	priority: [
		"angular"
	]
});

require( [
	'angular',
	'app',

	'controllers/locataire_map',
	'services/loc_service',

	'routes'
], function(angular, app, routes, locService) {
	'use strict';
	angular.bootstrap(document, ['showcase']);
});


require( ['bootstrap', 'typeahead'], function(){});

//require(['facebook']);