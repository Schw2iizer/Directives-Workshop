var app = angular.module("myDirectives", []);


app.directive("pending", function($q){
	return {
		restrict: "AE",
		scope: {
			request: "&"
		},
		// template: "<button ng-show='!spinner'> Submit </button> <img ng-show='spinner' <img src='http://www.qantasshop.com.au/img/loading-icon.gif'>",
		link: function(scope, elem, attrs){
				var spinnerIcon = angular.element("<span class='fa fa-spin'></span>")
				spinerIcon.hide();
				elem.after(spinnerIcon);

				var invokeRequest = function(){
					var deferred = $q.defer()

					deferred.resolve(scope.request());

					return deferred.promise;
				}

				elem.on("click", function(){
					elem.hide();
					spinnerIcon.show();
					invokeRequest().then(function(){
						setTimeout(function(){
							elem.show();
							spinnerIcon.hide();
						}, 3000);
					})
				})
	}

}

});

// line 8 = & means function coming from the scope