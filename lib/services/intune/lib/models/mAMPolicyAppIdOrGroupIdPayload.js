/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the MAMPolicyAppIdOrGroupIdPayload class.
 * @constructor
 * MAM Policy request body for properties Intune MAM.
 * @member {object} [properties]
 * 
 * @member {string} [properties.url]
 * 
 */
function MAMPolicyAppIdOrGroupIdPayload(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.properties) {
      this.properties = new models['MAMPolicyAppOrGroupIdProperties'](parameters.properties);
    }
  }    
}


/**
 * Validate the payload against the MAMPolicyAppIdOrGroupIdPayload schema
 *
 * @param {JSON} payload
 *
 */
MAMPolicyAppIdOrGroupIdPayload.prototype.serialize = function () {
  var payload = {};
  if (this['properties']) {
    payload['properties'] = this['properties'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to MAMPolicyAppIdOrGroupIdPayload schema
 *
 * @param {JSON} instance
 *
 */
MAMPolicyAppIdOrGroupIdPayload.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['properties']) {
      this['properties'] = new models['MAMPolicyAppOrGroupIdProperties']().deserialize(instance['properties']);
    }
  }

  return this;
};

module.exports = MAMPolicyAppIdOrGroupIdPayload;