(function () {

//avoid leaking to global variable
 'use strict';

//declare module
 angular.module('LunchCheck', [])

//declare controller
 .controller('LunchCheckController', LunchCheckController)

//inject controller in scope
 LunchCheckController.$inject = ['$scope'];

//the Lunch Controller
 function LunchCheckController ($scope){
 	$scope.items = "";
 	$scope.evaluateMsg = "";

//remove empty items, if any
 	function removeEmptyItems(arr) {
       for(var i = arr.length; i--;) {
           if(arr[i].trim() === "") {
               arr.splice(i, 1);
 			}
 		}
 	}

//count the items and return the number
 	function countItems(){
 		if ($scope.items == ""){
 			return 0;
 		}
 		var numberOfDishes = $scope.items.split(",");
 		removeEmptyItems(numberOfDishes)
 		return numberOfDishes.length;
 	}

//evaluate number of items and set message to be displayed
 	$scope.checkItems = function(){

 		var dishes = countItems();
 		if (dishes >3){
 			$scope.evaluateMsg = "Too Much!";
 		}
 		else if (dishes >0 ){
 			$scope.evaluateMsg = "Enjoy!";
 		}
 		else{
 			$scope.evaluateMsg = "Please enter data first";
 		}

 	}

 }




 })();
