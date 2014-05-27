;(function (angular, $) {
	'use strict';
	/* 
	 * Use of functional strict mode causes scoping issues when declaring the function or creating as an expression.
	 * The use of angular.module (below) is needed to remedy.
	*/

	/**
	Directive to render charts

	@module directives.FlotCharts
	*/
	angular.module('Charts', [])
		/**
		Chart creation directive

		@class flotChart
		@uses jQuery
		@example
			<elem data-flot-chart>
		@return {Chart} element
		*/
		.directive('flotChart', function () {
			return {
				restrict: 'EA',
				link: function (scope, element, attr) {
					scope.$watch(attr.ngModel,function (x) {
						if ((!x) || (!x.data)) { return; }
						$.plot(element, x.data, x.options);
					},true);
				}
			};
		});
}(angular, jQuery));
