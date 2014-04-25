define(['angular', 'app'], function(angular, app) {
	//console.log("Defining services");
	return app.service('locService', function($http, $q){
		//console.log("Starting service");
		
		var server = "http://localhost:3000";
		this.getLocations = function(){
			var deferred = $q.defer();
			//console.log("Getting " + server + "/velo/signalisation");
			$http.get(server + "/locations")
				 .success(function(data){
					deferred.resolve(data);
				 }).error(function(data){
					deferred.reject(data)	
				 });
			return deferred.promise;
		}
	});
});