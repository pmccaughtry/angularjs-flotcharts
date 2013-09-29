;(function (angular) {
	'use strict';
	/*
	* Use of functional strict mode causes scoping issues when declaring the function or creating as an expression.
	* The use of angular.module (below) is needed to remedy.
	*/
	var app = angular.module('app');

	// begin charts
	app.controller('serveruptimeChartCtrl', ['$scope', function ($scope) {
		// data and options passed to chart directive in /app/js/directives/charts.js
		$scope.model = {};

		$scope.model.data = [{
			data: [[1, 99], [2, 98], [3, 99], [4, 97], [5, 99], [6, 98]],
			lines: {
				fill: true
			}
		}];

		$scope.model.options = {
			lines: {
				show: true,
				fillColor: "#c1e7d3"
			},
			colors: ["#00a34a"]
		};
	}]);
	
	app.controller('cpuChartCtrl', ['$scope', function ($scope) {
		// data and options passed to chart directive in /app/js/directives/charts.js
		$scope.model = {};
		
		$scope.model.data = [{
			data: [[1, 153], [2, 258], [3, 198], [4, 163], [5, 201], [6, 100]],
			lines: {
				fill: false
			}
		}];

		$scope.model.options = "";
	}]);

	app.controller('diskChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [
			{
				label: "Available",
				data: 20,
				color:"#00a34a"
			},
			{
				label: "Used",
				data: 100,
				color:"#c00"
			}
		];

		$scope.model.options = {
			series: {
				pie: {
					innerRadius: 0.5, // for donut
					show: true,
					label: {
						formatter: function (label, series) {
							return '<div class="pie">' + label + ': ' +
								series.data[0][1] + 'GB <br>(' + Math.round(series.percent) + '%)</div>';
							}
					}
				}
			},
			legend: {
				show: false
			}
		};
	}]);

	app.controller('trafficChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [{
			data: [[1, 153], [2, 658], [3, 198], [4, 663], [5, 701], [6, 100]],
			lines: {
				fill: false
			}
		}];

		$scope.model.options = {
			lines: {
				show: true,
				fillColor: "#c2cfeb"
			},
			colors: ["#0b49a6"]
		};
	}]);
	// end charts
}(angular));
