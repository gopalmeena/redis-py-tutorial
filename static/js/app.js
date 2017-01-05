var redisApp = angular.module('redisApp',['ngMaterial']);
redisApp.controller('RedisCtrl',function($scope,$mdDialog){
	//write your code here
/*	$scope.showTabDialog = function(ev) {
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
*/
	$scope.showExpireDialog = function(ev){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'expire.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer){

		});

	};
	$scope.showSetDialog = function(ev){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'set.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer){

		});

	};
	$scope.showGetDialog = function(ev){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'get.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer){

		});

	};
	$scope.showKeysDialog = function(ev){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'keys.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer){

		});

	};

	$scope.showAppendDialog = function(ev){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'append.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer){

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