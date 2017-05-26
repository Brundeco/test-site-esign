/**
 * Created by bartdecorte on 23/03/2017.
 */

function _HasParams() {

	this.construct = function(params) {
		var scope = this;

		var param;
		for (var key in scope.params) {
			if (scope.params.hasOwnProperty(key)) {
				if (params.hasOwnProperty(key) || scope.defaults.hasOwnProperty(key)) {
					if (params.hasOwnProperty(key)) {
						param = params[key];
					} else if (scope.defaults.hasOwnProperty(key)) {
						param = scope.defaults[key];
					}
					if (param !== null && typeof param === 'object') param = $.extend(true, {}, param);
					scope.params[key] = param;
				}
			}
		}
	};

	this.construct(arguments[0]);

}