// code for app decleration goes here:
var app = angular.module('coolApp', []);

// AngularJS will invoke the controller with a $scope object
// In AngularJS, $scope is the application object (the owner of application variables and functions).
// The controller creates two properties (variables) in the scope (firstName and lastName).
// The ng-model directives bind the input fields to the controller properties (firstName and lastName).
// A controller can also have methods (variables as functions)
// code for controller goes here (control the data) (are objects):
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
