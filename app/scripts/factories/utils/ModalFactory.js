'use strict';

angular.module('wdyw')
.factory('ModalFactory',
['$modal', 'DataFactory',
  function($modal) {
    var createLoadingModal = function(scope) {
      return $modal.open({
        templateUrl: 'views/modals/loading.html',
        controller: 'LoadingModalCtrl',
        scope: scope,
        keyboard: false,
        backdrop: 'static',
        windowClass: 'app-modal-window'
      });
    };
    
    return {
      createLoadingModal: createLoadingModal
    };
  }])



