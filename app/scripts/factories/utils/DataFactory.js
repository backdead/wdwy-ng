'use strict';

angular.module('wdyw')
.factory('DataFactory', [function() {
     var createGoal = function() {
      return {
       name: "",
       age: "",
       comment: "",
       class: "alert alert-danger" 
      };
    };
    
    var extraGoalObject = function (goal) {
      return {
        name: goal.name,
        age: goal.age,
        comment: goal.comment
      };
    };
    
    

    return {
      createGoal:createGoal,
      extraGoalObject: extraGoalObject
    };

  }]);