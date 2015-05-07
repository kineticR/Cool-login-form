var app = angular.module('coolApp', []);

app.controller('myCtrl', function($scope) {
	// init application data
	$scope.fname = 'Bill';
	$scope.lname = 'Doe';
	$scope.email = 'Billdoe@gmail.com';
	$scope.password1 = '123456789';
	$scope.password2 = '123456789';

	$scope.passwordMatcher = function() {
		if ($scope.password1 == $scope.password2) {
			return "match";
		} else {
			return "do not match";
		}
	}

});
