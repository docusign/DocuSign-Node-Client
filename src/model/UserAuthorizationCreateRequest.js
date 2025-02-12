/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthorizationUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthorizationUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserAuthorizationCreateRequest = factory(root.Docusign.ApiClient, root.Docusign.AuthorizationUser);
  }
}(this, function(ApiClient, AuthorizationUser) {
  'use strict';


  /**
   * The UserAuthorizationCreateRequest model module.
   * @module model/UserAuthorizationCreateRequest
   */

  /**
   * Constructs a new <code>UserAuthorizationCreateRequest</code>.
   * @alias module:model/UserAuthorizationCreateRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAuthorizationCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuthorizationCreateRequest} obj Optional instance to populate.
   * @return {module:model/UserAuthorizationCreateRequest} The populated <code>UserAuthorizationCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentUser')) {
        obj['agentUser'] = AuthorizationUser.constructFromObject(data['agentUser']);
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/AuthorizationUser} agentUser
   */
  exports.prototype['agentUser'] = undefined;
  /**
   * 
   * @member {String} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * 
   * @member {String} permission
   */
  exports.prototype['permission'] = undefined;
  /**
   * 
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;



  return exports;
}));


