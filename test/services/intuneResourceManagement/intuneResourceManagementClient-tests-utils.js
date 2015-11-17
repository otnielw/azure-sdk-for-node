var request = require('request');
var promise = require('promise');
var moment = require('moment');
var should = require('should');
var util = require('util');
var TokenCloudCredentials = require('../../../lib/common/lib/services/credentials/tokenCloudCredentials');


function IntuneTestUtils() {}

IntuneTestUtils.PolicyType = Object.freeze({
  iOS: 0,
  Android: 1
});

IntuneTestUtils.getTokenCloudCredentials = function(username, password, clientId) {
  if ((!username || typeof username !== 'string') ||
    (!password || typeof password !== 'string') ||
    (!clientId || typeof clientId !== 'string')) {
    return null;
  }

  return new promise(function(resolve, reject) {
    request('https://login.windows-ppe.net/common/UserRealm/' + username + '?api-version=1.0',
      function(err, httpResponse, body) {
        if (err) {
          reject(err);
        }

        if (!httpResponse || httpResponse.statusCode !== 200) {
          reject(httpResponse);
        }

        var response;
        try {
          response = JSON.parse(body);
          if (!response || !response.domain_name) {
            reject("response is incorrect");
          }
        } catch (e) {
          reject(e);
        }

        request.post({
          url: 'https://login.windows-ppe.net/' + response.domain_name + '/oauth2/token',
          form: {
            resource: 'https://management.azure.com/',
            client_id: clientId,
            grant_type: 'password',
            username: username,
            password: password,
            scope: 'openid'
          }
        }, function(err, httpResponse, body) {
          if (err) {
            reject(err);
          }

          if (!httpResponse || httpResponse.statusCode !== 200) {
            reject(httpResponse);
          }

          var response;
          try {
            response = JSON.parse(body);
            if (!response || !response.access_token) {
              reject("response is incorrect");
            }
          } catch (e) {
            reject(e);
          }

          resolve(new TokenCloudCredentials({
            subscriptionId: "None",
            token: response.access_token
          }));
        });
      });
  });
}

IntuneTestUtils.getPolicyPutPayload = function(policyType) {
  if (policyType !== IntuneTestUtils.PolicyType.iOS && policyType !== IntuneTestUtils.PolicyType.Android) {
    return null;
  }

  // Dirty fix for moment.duration.toISOString method not existing
  // in the moment version listed as dependency for ms-rest,
  // while we wait for them to update dependency version(already spoke with them)
  var PT1H1M = moment.duration('PT1H1M');
  PT1H1M.toISOString = function() {
    return 'PT1H1M';
  }

  var P1D = moment.duration('P1D');
  P1D.toISOString = function() {
    return 'P1D';
  }

  // Common properties for all policies
  var properties = {
    accessRecheckOfflineTimeout: PT1H1M,
    accessRecheckOnlineTimeout: PT1H1M,
    appSharingFromLevel: 'allApps',
    appSharingToLevel: 'allApps',
    authentication: 'required',
    clipboardSharingLevel: 'allApps',
    dataBackup: 'allow',
    pinNumRetry: 1,
    deviceCompliance: 'enable',
    fileSharingSaveAs: 'allow',
    offlineWipeTimeout: P1D,
    pin: 'required'
  };

  if (policyType === IntuneTestUtils.PolicyType.iOS) {
    properties.description = 'iosOneCreated';
    properties.friendlyName = 'iosOneCreated';
    properties.touchId = 'enable';
    properties.managedBrowser = 'required';
    properties.fileEncryptionLevel = 'deviceLocked'
  } else {
    properties.description = 'androidOneCreated';
    properties.friendlyName = 'androidOneCreated';
    properties.screenCapture = 'allow';
    properties.managedBrowser = 'required';
    properties.fileEncryption = 'notRequired';
  }

  return properties;
}

IntuneTestUtils.getPolicyPatchPayload = function() {
  return {
    friendlyName: 'Patched'
  };
}

IntuneTestUtils.deletePolicies = function(client, location, policyType, ids, callback) {
  var pt;
  if (policyType === IntuneTestUtils.PolicyType.iOS) {
    pt = 'ios';
  } else if (policyType === IntuneTestUtils.PolicyType.Android) {
    pt = 'android';
  } else {
    callback(true);
  }

  if (!ids || !ids.length) {
    callback(true);
  }

  var completed = 0;
  var resolver = function(error, result) {
    if (error) {
      callback(false);
      return;
    }

    completed++;
    if (completed == ids.length) {
      callback(true);
    }
  }

  for (var i = 0; i < ids.length; i++) {
    client[pt].deleteMAMPolicy(location, ids[i], null, resolver);
  }
}

IntuneTestUtils.deleteAllPolicies = function(client, location, policyType, callback) {
  var pt;
  if (policyType === IntuneTestUtils.PolicyType.iOS) {
    pt = 'ios';
  } else if (policyType === IntuneTestUtils.PolicyType.Android) {
    pt = 'android';
  } else {
    callback(true);
  }

  var remaining;

  client[pt].getMAMPolicies(location, null, null, null, null, function(error, result, request, response) {
    if (error) {
      console.log(util.inspect(error));
      callback(false);
    }

    response.statusCode.should.equal(200);

    remaining = result.length;
    if (remaining === 0) {
      callback(true);
    }

    var resolver = function(error, result) {
      if (error) {
        callback(false);
        return;
      }

      remaining--;
      if (remaining === 0) {
        callback(true);
      }
    }

    for (var i = 0; i < result.length; i++) {
      client[pt].deleteMAMPolicy(location, result[i].name, null, resolver);
    }
  });
}

IntuneTestUtils.done = function(numberOfPendingEvents, resolver) {
  return function(pending, callback) {
    var p = pending;
    var c = callback;
    return function() {
      p.should.be.greaterThan(0);

      p--;
      if (p === 0) {
        c();
      }
    }
  }(numberOfPendingEvents, resolver);
}

module.exports = IntuneTestUtils;
