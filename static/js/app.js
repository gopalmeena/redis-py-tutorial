var redisApp = angular.module('redisApp',['ngMaterial']);
redisApp.controller('RedisCtrl',function($scope,$mdDialog){
	//write your code here
	$scope.showTabDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'expire.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};

	function DialogController($scope, $mdDialog) {
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
});