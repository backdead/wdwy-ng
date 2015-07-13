'use strict';

angular.module('wdyw')
.service('GoalService',
['$rootScope', 'GoalFactory',  'DataFactory', 
  function($rootScope, GoalFactory, DataFactory) {
    var goals = null;
    var newGoal = null;
    
    this.retrieveGoals = function() {
      goals = new GoalFactory().getGoals(
      {
      },
      //Success
      function(response) {
        //console.log(response);
      },
      //case error
      function() {
        
      });
      
      return goals;
    };
    
    this.createGoal = function(goal) {
       newGoal = DataFactory.extraGoalObject(goal);
       
       GoalFactory().createGoal(
       {
         name: newGoal.name,
         age: newGoal.age,
         comment: newGoal.comment
       },
       //success
       function(response) {
         console.log(response);
       },
       //error
       function() {
         
       }
       );
    }
    
  }]);
