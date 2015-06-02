var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, myService){
	$scope.quotes = myService.getData()
	
	$scope.addQuote = function(){
		var quoteObj = {
			text: $scope.quote,
			author: $scope.author
		}
		myService.addData(quoteObj)
	}
	$scope.removeQuote = function(){ 
		myService.removeData($scope.title)
	}
});