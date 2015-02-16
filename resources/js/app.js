(function(){

var app = angular.module('inditerrain',[]);

app.controller('inditerrainController', ['$http', function($http){
	this.dataset = [];
	var iand1 = this;

	$http.get("/iand2/_inc/CRON/JSON/inditerrain.json").success(function(data){

		iand1.dataset = data;
	})

	

	
}]);






})();


