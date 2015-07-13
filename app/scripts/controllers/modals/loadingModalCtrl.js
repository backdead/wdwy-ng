'use strict';
/**
 * @ngdoc object
 * @name wdyw.controller:LoadingCtrl
 * @description
 * This controller is used to handle the modal displaying the loading gif.
 * @requires bdLoyaltyWeb.EventNames
 */
angular.module('wdyw')
.controller('LoadingModalCtrl',
['$scope', '$modalInstance', '$timeout', 'EventNames',
  function($scope, $modalInstance, $timeout, EventNames) {

    /**
     * @ngdoc property
     * @name #dataLoaded
     * @propertyOf bdLoyaltyWeb.controller:LoadingCtrl
     * @returns {Objet} Specify which parts of the application are loaded and which are not.
     * @description Object associating each part of the application that must be loaded with a boolean
     */
    $scope.dataLoaded = {
    };

    /**
     * @ngdoc property
     * @name #elementLoadedCounter
     * @propertyOf bdLoyaltyWeb.controller:LoadingCtrl
     * @returns {Integer} Count the number of parts that are already loaded.
     * @description Count the number of parts of the application that are already loaded.
     */
    $scope.elementLoadedCounter = 0;

    /* Close the loading modal on LOGOUT event, it means the credentials are invalid
     * and the webservices have rejected our calls.
     */
    $scope.$on(EventNames.LOGOUT, function() {
      $modalInstance.dismiss();
    });

    /**
     * @ngdoc method
     * @name #periodicalCheck
     * @private
     * @methodOf bdLoyaltyWeb.controller:LoadingCtrl
     * @description
     * Function called each 5s while canClose() returns false.
     *
     * This function checks if the loading is complete or not.
     */
    var periodicalCheck = function() {

      if (!$scope.canClose()) {
        $timeout(periodicalCheck, 1000);
      } else {
        $modalInstance.close();
      }
    };

    $timeout(periodicalCheck, 1000);

    /**
     * @ngdoc method
     * @name #setValueToTrue
     * @methodOf bdLoyaltyWeb.controller:LoadingCtrl
     * @param {String} attributeName The name of the concerned loaded part of the application
     * @description
     * Allow the user to specify that a part of the application has been loaded.
     * If all the parts are loaded, the modal will be closed.
     */
    $scope.setValueToTrue = function(attributeName) {
      // We care only if the loaded data wasn't loaded before
      if (!$scope.dataLoaded[attributeName]) {
        $scope.dataLoaded[attributeName] = true;
        $scope.elementLoadedCounter++;
      }
    };

    /**
     * @ngdoc method
     * @name #canClose
     * @methodOf bdLoyaltyWeb.controller:LoadingCtrl
     * @returns {Boolean} If all the part of the application are loaded or not
     * @description
     * Specify if all the needed parts are loaded and thus if we can close the modal.
     */
    $scope.canClose = function() {
      var res = true;
      for (var key in $scope.dataLoaded) {
        res = res && $scope.dataLoaded[key];
      }
      return res;
    };

  }]);
