'use strict';

/**
 * @ngdoc object
 * @name wdyw.EventNames
 * @description
 * Constants containing the names of the personalised events sent by the application.
 */
angular.module('wdyw')
.constant('EventNames', {
  /**
   * @ngdoc property
   * @name #LOGIN
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The user has logged in.
   * @description The event linked with the log in of the user.
   */
  LOGIN: 'LogIn',
  /**
   * @ngdoc property
   * @name #LOGOUT
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The user has logged out.
   * @description The event linked with the log out of the user.
   */
  LOGOUT: 'LogOut',
  /**
   * @ngdoc property
   * @name #TOKEN_EXPIRED
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The user's token has expired
   * @description Event fired when the user's token has expired
   */
  TOKEN_EXPIRED: 'TokenExpired',
  /**
   * @ngdoc property
   * @name #TOKEN_GRANTED
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The application has successfully retrieved a token for the user
   * @description Event fired when the application has retrieved a token for the user
   */
  TOKEN_GRANTED: 'TokenSuccess',
  /**
   * @ngdoc property
   * @name #TOKEN_DENY
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The application have failed to retrieve a token for the user
   * @description Event fired when the application have failed to retrieve a token for the user.
   */
  TOKEN_DENY: 'TokenFail',
  /**
   * @ngdoc property
   * @name #LOADING_COMPLETE
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The application has successfully loaded all the needed components (dashboard & purchases).
   * @description Event fired when the application has retrieved all the needed global informations (dashboard + purchases)
   */
  LOADING_COMPLETE: 'LoadingComplete',
  /**
   * @ngdoc property
   * @name #LANGUAGE_CHANGE
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The user has changed his/her default language.
   * @description Event fired when the user has changes his/her default language.
   */
  LANGUAGE_CHANGE: 'LanguageChange',
  /**
   * @ngdoc property
   * @name #RESIZE
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The user has resized the window (or has zoomed in/out).
   * @description Event fired when the user resized the window.
   */
  RESIZE: 'ResizeEvent',
  /**
   * @ngdoc property
   * @name #CHANGE_PASS_FAILED
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The modification of the password has failed.
   * @description
   * The modification of the password has failed.
   */
  CHANGE_PASS_FAILED: 'PassModificationFailed',
  /**
   * @ngdoc property
   * @name #POINTS_UPDATE
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} The amount of points of the user for a given program has changed.
   * @description
   * The amount of points of the user for a given program has changed.
   */
  POINTS_UPDATE: 'PointsUpdated',
  /**
   * @ngdoc property
   * @name #DISPLAY_INFO
   * @propertyOf bdLoyaltyWeb.EventNames
   * @returns {String} An information message should be communicated to the user.
   * @description
   * An information message should be communicated to the user.
   */
  DISPLAY_INFO: 'DisplayInformation',
 
 
  SUBSCRIBE_SUCC: 'SubscribeSucc',
  SUBSCRIBE_FAIL: 'SubscribeFail',
  JOIN_SUCCESS: 'JOIN_SUCCESS',
  JOIN_FAILED: 'JOIN_FAILED',
  QUIT_SUCCESS: 'QUIT_SUCCESS',
  QUIT_FAILED: 'QUIT_FAILED',
  CANCEL_SUCCESS: 'CANCEL_SUCCESS',
  CANCEL_FAILED: 'CANCEL_FAILED'
});