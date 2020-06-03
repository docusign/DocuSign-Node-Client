/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthenticationStatus', 'model/DocumentVisibility', 'model/ErrorDetails', 'model/IdCheckInformationInput', 'model/NotaryHost', 'model/OfflineAttributes', 'model/RecipientAttachment', 'model/RecipientEmailNotification', 'model/RecipientIdentityVerification', 'model/RecipientPhoneAuthentication', 'model/RecipientSAMLAuthentication', 'model/RecipientSMSAuthentication', 'model/RecipientSignatureInformation', 'model/RecipientSignatureProvider', 'model/SocialAuthentication', 'model/Tabs', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthenticationStatus'), require('./DocumentVisibility'), require('./ErrorDetails'), require('./IdCheckInformationInput'), require('./NotaryHost'), require('./OfflineAttributes'), require('./RecipientAttachment'), require('./RecipientEmailNotification'), require('./RecipientIdentityVerification'), require('./RecipientPhoneAuthentication'), require('./RecipientSAMLAuthentication'), require('./RecipientSMSAuthentication'), require('./RecipientSignatureInformation'), require('./RecipientSignatureProvider'), require('./SocialAuthentication'), require('./Tabs'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.InPersonSigner = factory(root.Docusign.ApiClient, root.Docusign.AuthenticationStatus, root.Docusign.DocumentVisibility, root.Docusign.ErrorDetails, root.Docusign.IdCheckInformationInput, root.Docusign.NotaryHost, root.Docusign.OfflineAttributes, root.Docusign.RecipientAttachment, root.Docusign.RecipientEmailNotification, root.Docusign.RecipientIdentityVerification, root.Docusign.RecipientPhoneAuthentication, root.Docusign.RecipientSAMLAuthentication, root.Docusign.RecipientSMSAuthentication, root.Docusign.RecipientSignatureInformation, root.Docusign.RecipientSignatureProvider, root.Docusign.SocialAuthentication, root.Docusign.Tabs, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, AuthenticationStatus, DocumentVisibility, ErrorDetails, IdCheckInformationInput, NotaryHost, OfflineAttributes, RecipientAttachment, RecipientEmailNotification, RecipientIdentityVerification, RecipientPhoneAuthentication, RecipientSAMLAuthentication, RecipientSMSAuthentication, RecipientSignatureInformation, RecipientSignatureProvider, SocialAuthentication, Tabs, UserInfo) {
  'use strict';


  /**
   * The InPersonSigner model module.
   * @module model/InPersonSigner
   */

  /**
   * Constructs a new <code>InPersonSigner</code>.
   * @alias module:model/InPersonSigner
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InPersonSigner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InPersonSigner} obj Optional instance to populate.
   * @return {module:model/InPersonSigner} The populated <code>InPersonSigner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('addAccessCodeToEmail')) {
        obj['addAccessCodeToEmail'] = ApiClient.convertToType(data['addAccessCodeToEmail'], 'String');
      }
      if (data.hasOwnProperty('autoNavigation')) {
        obj['autoNavigation'] = ApiClient.convertToType(data['autoNavigation'], 'String');
      }
      if (data.hasOwnProperty('canSignOffline')) {
        obj['canSignOffline'] = ApiClient.convertToType(data['canSignOffline'], 'String');
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('creationReason')) {
        obj['creationReason'] = ApiClient.convertToType(data['creationReason'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
      }
      if (data.hasOwnProperty('declinedDateTime')) {
        obj['declinedDateTime'] = ApiClient.convertToType(data['declinedDateTime'], 'String');
      }
      if (data.hasOwnProperty('declinedReason')) {
        obj['declinedReason'] = ApiClient.convertToType(data['declinedReason'], 'String');
      }
      if (data.hasOwnProperty('defaultRecipient')) {
        obj['defaultRecipient'] = ApiClient.convertToType(data['defaultRecipient'], 'String');
      }
      if (data.hasOwnProperty('deliveredDateTime')) {
        obj['deliveredDateTime'] = ApiClient.convertToType(data['deliveredDateTime'], 'String');
      }
      if (data.hasOwnProperty('deliveryMethod')) {
        obj['deliveryMethod'] = ApiClient.convertToType(data['deliveryMethod'], 'String');
      }
      if (data.hasOwnProperty('documentVisibility')) {
        obj['documentVisibility'] = ApiClient.convertToType(data['documentVisibility'], [DocumentVisibility]);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailNotification')) {
        obj['emailNotification'] = RecipientEmailNotification.constructFromObject(data['emailNotification']);
      }
      if (data.hasOwnProperty('embeddedRecipientStartURL')) {
        obj['embeddedRecipientStartURL'] = ApiClient.convertToType(data['embeddedRecipientStartURL'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('excludedDocuments')) {
        obj['excludedDocuments'] = ApiClient.convertToType(data['excludedDocuments'], ['String']);
      }
      if (data.hasOwnProperty('faxNumber')) {
        obj['faxNumber'] = ApiClient.convertToType(data['faxNumber'], 'String');
      }
      if (data.hasOwnProperty('hostEmail')) {
        obj['hostEmail'] = ApiClient.convertToType(data['hostEmail'], 'String');
      }
      if (data.hasOwnProperty('hostName')) {
        obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
      }
      if (data.hasOwnProperty('idCheckConfigurationName')) {
        obj['idCheckConfigurationName'] = ApiClient.convertToType(data['idCheckConfigurationName'], 'String');
      }
      if (data.hasOwnProperty('idCheckInformationInput')) {
        obj['idCheckInformationInput'] = IdCheckInformationInput.constructFromObject(data['idCheckInformationInput']);
      }
      if (data.hasOwnProperty('identityVerification')) {
        obj['identityVerification'] = RecipientIdentityVerification.constructFromObject(data['identityVerification']);
      }
      if (data.hasOwnProperty('inheritEmailNotificationConfiguration')) {
        obj['inheritEmailNotificationConfiguration'] = ApiClient.convertToType(data['inheritEmailNotificationConfiguration'], 'String');
      }
      if (data.hasOwnProperty('inPersonSigningType')) {
        obj['inPersonSigningType'] = ApiClient.convertToType(data['inPersonSigningType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('notaryHost')) {
        obj['notaryHost'] = NotaryHost.constructFromObject(data['notaryHost']);
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('offlineAttributes')) {
        obj['offlineAttributes'] = OfflineAttributes.constructFromObject(data['offlineAttributes']);
      }
      if (data.hasOwnProperty('phoneAuthentication')) {
        obj['phoneAuthentication'] = RecipientPhoneAuthentication.constructFromObject(data['phoneAuthentication']);
      }
      if (data.hasOwnProperty('recipientAttachments')) {
        obj['recipientAttachments'] = ApiClient.convertToType(data['recipientAttachments'], [RecipientAttachment]);
      }
      if (data.hasOwnProperty('recipientAuthenticationStatus')) {
        obj['recipientAuthenticationStatus'] = AuthenticationStatus.constructFromObject(data['recipientAuthenticationStatus']);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientIdGuid')) {
        obj['recipientIdGuid'] = ApiClient.convertToType(data['recipientIdGuid'], 'String');
      }
      if (data.hasOwnProperty('recipientSignatureProviders')) {
        obj['recipientSignatureProviders'] = ApiClient.convertToType(data['recipientSignatureProviders'], [RecipientSignatureProvider]);
      }
      if (data.hasOwnProperty('recipientSuppliesTabs')) {
        obj['recipientSuppliesTabs'] = ApiClient.convertToType(data['recipientSuppliesTabs'], 'String');
      }
      if (data.hasOwnProperty('requireIdLookup')) {
        obj['requireIdLookup'] = ApiClient.convertToType(data['requireIdLookup'], 'String');
      }
      if (data.hasOwnProperty('requireSignerCertificate')) {
        obj['requireSignerCertificate'] = ApiClient.convertToType(data['requireSignerCertificate'], 'String');
      }
      if (data.hasOwnProperty('requireSignOnPaper')) {
        obj['requireSignOnPaper'] = ApiClient.convertToType(data['requireSignOnPaper'], 'String');
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('routingOrder')) {
        obj['routingOrder'] = ApiClient.convertToType(data['routingOrder'], 'String');
      }
      if (data.hasOwnProperty('samlAuthentication')) {
        obj['samlAuthentication'] = RecipientSAMLAuthentication.constructFromObject(data['samlAuthentication']);
      }
      if (data.hasOwnProperty('sentDateTime')) {
        obj['sentDateTime'] = ApiClient.convertToType(data['sentDateTime'], 'String');
      }
      if (data.hasOwnProperty('signatureInfo')) {
        obj['signatureInfo'] = RecipientSignatureInformation.constructFromObject(data['signatureInfo']);
      }
      if (data.hasOwnProperty('signedDateTime')) {
        obj['signedDateTime'] = ApiClient.convertToType(data['signedDateTime'], 'String');
      }
      if (data.hasOwnProperty('signerEmail')) {
        obj['signerEmail'] = ApiClient.convertToType(data['signerEmail'], 'String');
      }
      if (data.hasOwnProperty('signerName')) {
        obj['signerName'] = ApiClient.convertToType(data['signerName'], 'String');
      }
      if (data.hasOwnProperty('signInEachLocation')) {
        obj['signInEachLocation'] = ApiClient.convertToType(data['signInEachLocation'], 'String');
      }
      if (data.hasOwnProperty('signingGroupId')) {
        obj['signingGroupId'] = ApiClient.convertToType(data['signingGroupId'], 'String');
      }
      if (data.hasOwnProperty('signingGroupName')) {
        obj['signingGroupName'] = ApiClient.convertToType(data['signingGroupName'], 'String');
      }
      if (data.hasOwnProperty('signingGroupUsers')) {
        obj['signingGroupUsers'] = ApiClient.convertToType(data['signingGroupUsers'], [UserInfo]);
      }
      if (data.hasOwnProperty('smsAuthentication')) {
        obj['smsAuthentication'] = RecipientSMSAuthentication.constructFromObject(data['smsAuthentication']);
      }
      if (data.hasOwnProperty('socialAuthentications')) {
        obj['socialAuthentications'] = ApiClient.convertToType(data['socialAuthentications'], [SocialAuthentication]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = Tabs.constructFromObject(data['tabs']);
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('totalTabCount')) {
        obj['totalTabCount'] = ApiClient.convertToType(data['totalTabCount'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * If a value is provided, the recipient must enter the value as the access code to view and sign the envelope.   Maximum Length: 50 characters and it must conform to the account's access code format setting.  If blank, but the signer `accessCode` property is set in the envelope, then that value is used.  If blank and the signer `accessCode` property is not set, then the access code is not required.
   * @member {String} accessCode
   */
  exports.prototype['accessCode'] = undefined;
  /**
   * This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
   * @member {String} addAccessCodeToEmail
   */
  exports.prototype['addAccessCodeToEmail'] = undefined;
  /**
   * 
   * @member {String} autoNavigation
   */
  exports.prototype['autoNavigation'] = undefined;
  /**
   * When set to **true**, specifies that the signer can perform the signing ceremony offline.
   * @member {String} canSignOffline
   */
  exports.prototype['canSignOffline'] = undefined;
  /**
   * Specifies whether the recipient is embedded or remote.   If the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng.   Maximum length: 100 characters. 
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * 
   * @member {String} creationReason
   */
  exports.prototype['creationReason'] = undefined;
  /**
   * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
   * @member {Array.<String>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * The date and time the recipient declined the document.
   * @member {String} declinedDateTime
   */
  exports.prototype['declinedDateTime'] = undefined;
  /**
   * The reason the recipient declined the document.
   * @member {String} declinedReason
   */
  exports.prototype['declinedReason'] = undefined;
  /**
   * 
   * @member {String} defaultRecipient
   */
  exports.prototype['defaultRecipient'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveredDateTime
   */
  exports.prototype['deliveredDateTime'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveryMethod
   */
  exports.prototype['deliveryMethod'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocumentVisibility>} documentVisibility
   */
  exports.prototype['documentVisibility'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/RecipientEmailNotification} emailNotification
   */
  exports.prototype['emailNotification'] = undefined;
  /**
   * Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session.   If set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.  It is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient's identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.  If the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets.   *Example*:   `http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]` 
   * @member {String} embeddedRecipientStartURL
   */
  exports.prototype['embeddedRecipientStartURL'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.  When enforce signer visibility is enabled, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
   * @member {Array.<String>} excludedDocuments
   */
  exports.prototype['excludedDocuments'] = undefined;
  /**
   * Reserved:
   * @member {String} faxNumber
   */
  exports.prototype['faxNumber'] = undefined;
  /**
   * 
   * @member {String} hostEmail
   */
  exports.prototype['hostEmail'] = undefined;
  /**
   * Specifies the name of the signing host. It is a required element for In Person Signers recipient Type.  Maximum Length: 100 characters.
   * @member {String} hostName
   */
  exports.prototype['hostName'] = undefined;
  /**
   * Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.  *Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
   * @member {String} idCheckConfigurationName
   */
  exports.prototype['idCheckConfigurationName'] = undefined;
  /**
   * @member {module:model/IdCheckInformationInput} idCheckInformationInput
   */
  exports.prototype['idCheckInformationInput'] = undefined;
  /**
   * @member {module:model/RecipientIdentityVerification} identityVerification
   */
  exports.prototype['identityVerification'] = undefined;
  /**
   * When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
   * @member {String} inheritEmailNotificationConfiguration
   */
  exports.prototype['inheritEmailNotificationConfiguration'] = undefined;
  /**
   * 
   * @member {String} inPersonSigningType
   */
  exports.prototype['inPersonSigningType'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/NotaryHost} notaryHost
   */
  exports.prototype['notaryHost'] = undefined;
  /**
   * Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.  Maximum Length: 1000 characters.
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * @member {module:model/OfflineAttributes} offlineAttributes
   */
  exports.prototype['offlineAttributes'] = undefined;
  /**
   * @member {module:model/RecipientPhoneAuthentication} phoneAuthentication
   */
  exports.prototype['phoneAuthentication'] = undefined;
  /**
   * Reserved:
   * @member {Array.<module:model/RecipientAttachment>} recipientAttachments
   */
  exports.prototype['recipientAttachments'] = undefined;
  /**
   * @member {module:model/AuthenticationStatus} recipientAuthenticationStatus
   */
  exports.prototype['recipientAuthenticationStatus'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {String} recipientIdGuid
   */
  exports.prototype['recipientIdGuid'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientSignatureProvider>} recipientSignatureProviders
   */
  exports.prototype['recipientSignatureProviders'] = undefined;
  /**
   * 
   * @member {String} recipientSuppliesTabs
   */
  exports.prototype['recipientSuppliesTabs'] = undefined;
  /**
   * When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
   * @member {String} requireIdLookup
   */
  exports.prototype['requireIdLookup'] = undefined;
  /**
   * 
   * @member {String} requireSignerCertificate
   */
  exports.prototype['requireSignerCertificate'] = undefined;
  /**
   * 
   * @member {String} requireSignOnPaper
   */
  exports.prototype['requireSignOnPaper'] = undefined;
  /**
   * Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
   * @member {String} roleName
   */
  exports.prototype['roleName'] = undefined;
  /**
   * Specifies the routing order of the recipient in the envelope. 
   * @member {String} routingOrder
   */
  exports.prototype['routingOrder'] = undefined;
  /**
   * @member {module:model/RecipientSAMLAuthentication} samlAuthentication
   */
  exports.prototype['samlAuthentication'] = undefined;
  /**
   * The date and time the envelope was sent.
   * @member {String} sentDateTime
   */
  exports.prototype['sentDateTime'] = undefined;
  /**
   * @member {module:model/RecipientSignatureInformation} signatureInfo
   */
  exports.prototype['signatureInfo'] = undefined;
  /**
   * Reserved: For DocuSign use only. 
   * @member {String} signedDateTime
   */
  exports.prototype['signedDateTime'] = undefined;
  /**
   * The email address for an InPersonSigner recipient Type.   Maximum Length: 100 characters. 
   * @member {String} signerEmail
   */
  exports.prototype['signerEmail'] = undefined;
  /**
   * Required. The full legal name of a signer for the envelope.   Maximum Length: 100 characters.   
   * @member {String} signerName
   */
  exports.prototype['signerName'] = undefined;
  /**
   * When set to **true**, specifies that the signer must sign in all locations.
   * @member {String} signInEachLocation
   */
  exports.prototype['signInEachLocation'] = undefined;
  /**
   * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
   * @member {String} signingGroupId
   */
  exports.prototype['signingGroupId'] = undefined;
  /**
   * The display name for the signing group.   Maximum Length: 100 characters. 
   * @member {String} signingGroupName
   */
  exports.prototype['signingGroupName'] = undefined;
  /**
   * A complex type that contains information about users in the signing group.
   * @member {Array.<module:model/UserInfo>} signingGroupUsers
   */
  exports.prototype['signingGroupUsers'] = undefined;
  /**
   * @member {module:model/RecipientSMSAuthentication} smsAuthentication
   */
  exports.prototype['smsAuthentication'] = undefined;
  /**
   *  Lists the social ID type that can be used for recipient authentication.
   * @member {Array.<module:model/SocialAuthentication>} socialAuthentications
   */
  exports.prototype['socialAuthentications'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Tabs} tabs
   */
  exports.prototype['tabs'] = undefined;
  /**
   * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;
  /**
   * 
   * @member {String} totalTabCount
   */
  exports.prototype['totalTabCount'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


