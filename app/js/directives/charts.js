;(function () {
	'use strict';
	/* 
	 * Use of functional strict mode causes scoping issues when declaring the function or creating as an expression.
	 * The use of angular.module (below) is needed to remedy.
	*/
	
	var chart = angular.module('Charts', []);

	chart.directive('flotChart', function () {
		return {
			restrict: 'EA',
			controller: ['$scope', '$attrs', function ($scope, $attrs) {
				var plotid = '#' + $attrs.id,
					model = $scope[$attrs.ngModel];

				// add attribute to check type, populate default options but also pull in custom options from user?

				$scope.$watch('model', function (x) {
					$.plot(plotid, x.data, x.options);
				});
			}]
		};
	});
}());
