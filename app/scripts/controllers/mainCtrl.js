'use strict';

/**
 * @ngdoc function
 * @name wdyw.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wdyw
 */
angular.module('wdyw')
.controller('MainCtrl',
['$scope', 'DataFactory', 'GoalService', 'ModalFactory', '$route',
  function($scope, DataFactory, GoalService, ModalFactory,   $route) {
    
    $scope.newGoal = null;
    
    $scope.goals = GoalService.retrieveGoals();
    
    var init = function () {
      $scope.newGoal = DataFactory.createGoal();    
    };

    init();
    
    //var counter = $scope.comments.slice(-1)[0];
    $scope.glued = true;
    
    var openLoadingModal = function() {
      var modalInstance = ModalFactory.createLoadingModal($scope);
      modalInstance.result.then(function() {
        $route.reload();
        //ApplicationNavigationService.transitionTo(ApplicationStates.HOME);
        $scope.modalInstance.close();
      });
    };
    
    $scope.post = function(newGoal) {
        GoalService.createGoal(newGoal);
        $route.reload();
        openLoadingModal();
        //$modalInstance.close();
        //$modalInstance.dismiss();
    };
    

    $scope.isNoAge = function () {
      var valid = true;
      if($scope.newGoal.age !== '') {
        valid = false;
      }
      
      return valid;
    };
    
    $scope.isNoComment = function () {
      var valid = true;
      if($scope.newGoal.comment !== '') {
        valid = false;
      }
            
      return valid;
    };
    
    $scope.isNoName = function() {
        var valid = true;
        if($scope.newGoal.name !== '') {
            valid = false;
        }
        
        return valid;
    };


  }]);
