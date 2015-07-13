'use strict';


angular.module('wdyw')
.factory('GoalFactory',
['$resource', 'WsSettings', 
  function ($resource, WsSettings) {

    return function () {
    
      var getGoals = {
        method: 'GET',
        isArray : true
      };
      
      var createGoal = {
        method: 'POST',
        isArray: false
      };
      
      return $resource(WsSettings.HOST + WsSettings.GOAL,
      {},
      {
        getGoals: getGoals,
        createGoal: createGoal
      });
    };
  }]);


