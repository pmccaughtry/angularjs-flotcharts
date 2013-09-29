;(function () {
	'use strict';
	/* 
	 * Use of functional strict mode causes scoping issues when declaring the function or creating as an expression.
	 * The use of angular.module (below) is needed to remedy.
	*/
	var app = angular.module('app');

	// begin overview page charts
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
	// end overview page charts

	// begin organization page charts
	app.controller('zncryptactivationsChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [{
			data:[["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]]
		}];

		$scope.model.options = {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		};
	}]);

	app.controller('ztrusteeactivationsChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [{
			data: [["January", 6], ["February", 3], ["March", 8], ["April", 9], ["May", 22], ["June", 5]]
		}];

		$scope.model.options = {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		};
	}]);

	app.controller('ztrusteedepositsChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [
			{
				label: "Gets",
				data:110,
				color: "#e4d672"
			},
			{
				label: "Puts",
				data: 45,
				color: "#c2cfeb"
			}
		];

		$scope.model.options = {
			series: {
				pie: {
					show: true,
					radius: 1,
					label: {
						radius: 2/3,
						formatter: function (label, series) {
							return '<div class="pie">' + label + ': ' +
								series.data[0][1] + '<br>(' + Math.round(series.percent) + '%)</div>';
						}
					}
				}
			},
			legend: {
				show: false
			}
		};
	}]);

	app.controller('depositsizeChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [{
			data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]]
		}];

		$scope.model.options = {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		};
	}]);

	app.controller('responsetimeChartCtrl', ['$scope', function ($scope) {
		$scope.model = {};

		$scope.model.data = [
			[[1, 1530], [2, 6580], [3, 1980],[4, 6630], [5, 8010], [6, 10800]],
			[[1, 2221], [2, 1110], [3, 4432],[4, 3951], [5, 7639], [6, 9122]]
		];

		$scope.model.options = '';
	}]);
	// end organization page charts

	// begin item-specific page charts 
	app.controller('itemChartCtrl', ['$scope', function ($scope) {
	
		var getRandomData = function () {
			var maximum = 100;
			
			if (data.length) {
				data = data.slice(1);
			}

			while (data.length < maximum) {
				var previous = data.length ? data[data.length - 1] : 50;
				var y = previous + Math.random() * 10 - 5;
				data.push(y < 0 ? 0 : y > 100 ? 100 : y);
			}

			// zip the generated y values with the x values

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]]);
			}

			return res;
		};

		var data = [];

		var series = [{
			data: getRandomData(),
			lines: {
				fill: true
			}
		}];


		$scope.model = {};

		$scope.model.data = series;

		$scope.model.options = {
			grid: {
				borderWidth: 1,
				minBorderMargin: 20,
				labelMargin: 10,
				backgroundColor: {
					colors: ["#fff", "#e4f4f4"]
				},
				margin: {
					top: 8,
					bottom: 20,
					left: 20
				},
				markings: function(axes) {
					var markings = [];
					var xaxis = axes.xaxis;
					for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
						markings.push({ xaxis: { from: x, to: x + xaxis.tickSize }, color: "rgba(232, 232, 255, 0.2)" });
					}
					return markings;
				}
			},
			xaxis: {
				tickFormatter: function() {
					return "";
				}
			},
			yaxis: {
				min: 0,
				max: 110
			},
			legend: {
				show: true
			}
		};
	}]);
	// end item specific page charts
}());
