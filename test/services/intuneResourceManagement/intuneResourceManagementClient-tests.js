//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var should = require('should');
var uuid = require('node-uuid');
var moment = require('moment');
var util = require('util');
var msRestAzure = require('ms-rest-azure')
var IntuneResourceManagementClient = require('../../../lib/services/intune/lib/intuneResourceManagementClient');
var IntuneTestUtils = require('./intuneResourceManagementClient-tests-utils');

var client;
var location;
var androidPolicyId;
var iOSApps;
var androidApps;
var iOSPolicyId;
var policiesCreated = [];
var policiesType;

describe('Intune Resource Management', function() {

  before(function(done) {
    IntuneTestUtils
      .getTokenCloudCredentials(process.env['USERNAME'], process.env['PASSWORD'], process.env['CLIENT_ID'])
      .then(function(tokenCloudCredentials) {
        client = new IntuneResourceManagementClient(tokenCloudCredentials);
        client.getLocationByHostName(null, function(err, result) {
          should.not.exist(err);
          should.exist(result);
          should.exist(result.hostName);
          location = result.hostName;

          // Setup resolvers
          doneDeleting = IntuneTestUtils.done(2, createInitialPolicies);
          done = IntuneTestUtils.done(3, done);

          // Delete all iOS Policies
          IntuneTestUtils.deleteAllPolicies(client, location, IntuneTestUtils.PolicyType.iOS, function(success) {
            success.should.be.true;
            doneDeleting();
          });

          // Delete all Android Policies
          IntuneTestUtils.deleteAllPolicies(client, location, IntuneTestUtils.PolicyType.Android, function(success) {
            success.should.be.true;
            doneDeleting();
          });

          client.getApps(location, null, null, null, null, function(err, result, request, response) {
            should.not.exist(err);
            should.exist(result);
            result.length.should.be.greaterThan(0);
            response.statusCode.should.equal(200);

            iOSApps = result.filter(function(app) {
              return app.platform === 'ios';
            });

            androidApps = result.filter(function(app) {
              return app.platform === 'android';
            });

            done();
          });

          function createInitialPolicies() {
            iOSPolicyId = uuid.v4();
            var iOSPolicyPayload = IntuneTestUtils.getPolicyPutPayload(IntuneTestUtils.PolicyType.iOS);
            client.ios.createOrUpdateMAMPolicy(location, iOSPolicyId, iOSPolicyPayload, null, function(err, result, request, response) {
              should.not.exist(err);
              should.exist(result);
              response.statusCode.should.equal(200);

              // Make sure policy is there
              client.ios.getMAMPolicyById(location, iOSPolicyId, null, null, function(err, result, request, response) {
                should.not.exist(err);
                should.exist(result);
                response.statusCode.should.equal(200);
                done();
              });
            });

            androidPolicyId = uuid.v4();
            var androidPolicyPayload = IntuneTestUtils.getPolicyPutPayload(IntuneTestUtils.PolicyType.Android);
            client.android.createOrUpdateMAMPolicy(location, androidPolicyId, androidPolicyPayload, null, function(err, result, request, response) {
              should.not.exist(err);
              should.exist(result);
              response.statusCode.should.equal(200);

              // Make sure policy is there
              client.android.getMAMPolicyById(location, androidPolicyId, null, null, function(err, result, request, response) {
                should.not.exist(err);
                should.exist(result);
                response.statusCode.should.equal(200);
                done();
              });
            });
          }
        });
      });
  });

  after(function(done) {
    // Clean up after all tests are done running
    done = IntuneTestUtils.done(2, done);

    // Delete all iOS Policies
    IntuneTestUtils.deleteAllPolicies(client, location, IntuneTestUtils.PolicyType.iOS, function(success) {
      success.should.be.true;
      done();
    });

    // Delete all Android Policies
    IntuneTestUtils.deleteAllPolicies(client, location, IntuneTestUtils.PolicyType.Android, function(success) {
      success.should.be.true;
      done();
    });
  });

  beforeEach(function(done) {
    // Do nothing for now
    done();
  });

  afterEach(function(done) {
    // Clean up after each test
    IntuneTestUtils.deletePolicies(client, location, policiesType, policiesCreated, function(success) {
      success.should.be.true;
      policiesCreated = [];
      policiesType = null;
      done();
    });
  });

  describe('- Locations', function() {
    it('- getLocations', function(done) {
      client.getLocations(null, function(err, result, request, response) {
        should.not.exist(err);
        should.exist(result);
        result.length.should.be.greaterThan(0);
        response.statusCode.should.equal(200);
        done();
      });
    });

    it('- getLocationByHostName', function(done) {
      client.getLocationByHostName(null, function(err, result, request, response) {
        should.not.exist(err);
        should.exist(result);
        should.exist(result.hostName);
        response.statusCode.should.equal(200);
        done();
      });
    });
  });

  describe('- Apps', function() {
    it('- getApps', function(done) {
      client.getApps(location, null, null, null, null, function(err, result, request, response) {
        should.not.exist(err);
        should.exist(result);
        result.length.should.be.greaterThan(0);
        response.statusCode.should.equal(200);
        done();
      });
    });
  });

  describe('- Policies', function() {
    describe('- iOS', function() {
      it('- getMAMPolicies', function(done) {
        client.ios.getMAMPolicies(location, null, null, null, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);
          done();
        });
      });

      it('- getMAMPoliciyById', function(done) {
        client.ios.getMAMPolicyById(location, iOSPolicyId, null, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);
          done();
        });
      });

      it('- createOrUpdateMAMPolicy', function(done) {
        var policyPayload = IntuneTestUtils.getPolicyPutPayload(IntuneTestUtils.PolicyType.iOS);
        var policyId = uuid.v4();
        client.ios.createOrUpdateMAMPolicy(location, policyId, policyPayload, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);

          policiesCreated.push(policyId);
          policiesType = IntuneTestUtils.PolicyType.iOS;

          // Make sure policy is there
          client.ios.getMAMPolicyById(location, policyId, null, null, function(err, result) {
            should.not.exist(err);
            should.exist(result);

            // Check that every property is written and retrieved correctly
            var accessRecheckOfflineTimeout = moment.duration(policyPayload.accessRecheckOfflineTimeout).toISOString();
            accessRecheckOfflineTimeout.should.be.equal(result.accessRecheckOfflineTimeout.toISOString());
            var accessRecheckOnlineTimeout = moment.duration(policyPayload.accessRecheckOnlineTimeout).toISOString();
            accessRecheckOnlineTimeout.should.be.equal(result.accessRecheckOnlineTimeout.toISOString());
            policyPayload.appSharingFromLevel.should.be.equal(result.appSharingFromLevel);
            policyPayload.appSharingToLevel.should.be.equal(result.appSharingToLevel);
            policyPayload.authentication.should.be.equal(result.authentication);
            policyPayload.clipboardSharingLevel.should.be.equal(result.clipboardSharingLevel);
            policyPayload.dataBackup.should.be.equal(result.dataBackup);
            policyPayload.pinNumRetry.should.be.equal(result.pinNumRetry);
            policyPayload.deviceCompliance.should.be.equal(result.deviceCompliance);
            policyPayload.fileSharingSaveAs.should.be.equal(result.fileSharingSaveAs);
            var offlineWipeTimeout = moment.duration(policyPayload.offlineWipeTimeout).toISOString();
            offlineWipeTimeout.should.be.equal(result.offlineWipeTimeout.toISOString());
            policyPayload.pin.should.be.equal(result.pin);
            policyPayload.description.should.be.equal(result.description);
            policyPayload.friendlyName.should.be.equal(result.friendlyName);
            policyPayload.touchId.should.be.equal(result.touchId);
            policyPayload.managedBrowser.should.be.equal(result.managedBrowser);
            policyPayload.fileEncryptionLevel.should.be.equal(result.fileEncryptionLevel);

            //result.should.be.equal(policyPayload);
            response.statusCode.should.equal(200);
            done();
          });
        });
      });

      it('- patchMAMPolicy', function(done) {
        var policyPatchPayload = IntuneTestUtils.getPolicyPatchPayload(IntuneTestUtils.PolicyType.iOS);
        client.ios.patchMAMPolicy(location, iOSPolicyId, policyPatchPayload, null, function(error, result, request, response) {
          should.not.exist(error);
          should.exist(result);
          response.statusCode.should.equal(200);

          // Make sure policy is there
          client.ios.getMAMPolicyById(location, iOSPolicyId, null, null, function(error, result, request, response) {
            should.not.exist(error);
            should.exist(result);
            response.statusCode.should.equal(200);

            // Check if updated value was actually written on patch
            policyPatchPayload.friendlyName.should.be.equal(result.friendlyName);

            done();
          });
        });
      });

      it('- deleteMAMPolicy', function(done) {
        var policyPayload = IntuneTestUtils.getPolicyPutPayload(IntuneTestUtils.PolicyType.iOS);
        var policyId = uuid.v4();
        client.ios.createOrUpdateMAMPolicy(location, policyId, policyPayload, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);

          // Make sure policy is there
          client.ios.deleteMAMPolicy(location, policyId, null, function(err, result, request, response) {
            should.not.exist(err);

            if (response.statusCode !== 200 && response.statusCode !== 204) {
              response.statusCode.should.be.equal('200 or 204');
            }

            done();
          });
        });
      });

      it('- getAppsForMAMPolicy', function(done) {
        client.ios.getAppForMAMPolicy(location, iOSPolicyId, null, null, null, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);
          done();
        });
      });

      it('- addAppForMAMPolicy', function(done) {
        var appId = iOSApps[0].name;
        var appProperties = {
          properties: {
            url: 'https://api-dogfood.resources.windows-int.net' + iOSApps[0].id
          }
        };
        client.ios.addAppForMAMPolicy(location, iOSPolicyId, appId, appProperties, null, function(err, result, request, response) {
          should.not.exist(err);

          if (response.statusCode !== 200 && response.statusCode !== 204) {
            response.statusCode.should.be.equal('200 or 204');
          }

          client.ios.getAppForMAMPolicy(location, iOSPolicyId, null, null, null, null, function(err, result, request, response) {
            should.not.exist(err);
            should.exist(result);
            response.statusCode.should.equal(200);

            // Make sure that the app was actually added
            var addedApp = result.filter(function(app) {
              return app.name == appId;
            });

            addedApp.length.should.be.equal(1);

            done();
          });
        });
      });

      it('- deleteAppForMAMPolicy', function(done) {
        var appId = iOSApps[0].name;
        client.ios.deleteAppForMAMPolicy(location, iOSPolicyId, appId, null, function(err, result, request, response) {
          should.not.exist(err);

          if (response.statusCode !== 200 && response.statusCode !== 204) {
            response.statusCode.should.be.equal('200 or 204');
          }

          client.ios.getAppForMAMPolicy(location, iOSPolicyId, null, null, null, null, function(err, result, request, response) {
            should.not.exist(err);
            should.exist(result);
            response.statusCode.should.equal(200);

            // Make sure that the app was actually deleted
            var addedApp = result.filter(function(app) {
              return app.name == appId;
            });

            addedApp.length.should.be.equal(0);

            done();
          });
        });
      });
    });

    describe('- Android', function() {
      it('- getMAMPolicies', function(done) {
        client.android.getMAMPolicies(location, null, null, null, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);
          done();
        });
      });

      it('- getMAMPoliciyById', function(done) {
        client.android.getMAMPolicyById(location, androidPolicyId, null, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);
          done();
        });
      });

      it('- createOrUpdateMAMPolicy', function(done) {
        var policyPayload = IntuneTestUtils.getPolicyPutPayload(IntuneTestUtils.PolicyType.Android);
        var policyId = uuid.v4();
        client.android.createOrUpdateMAMPolicy(location, policyId, policyPayload, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);

          policiesCreated.push(policyId);
          policiesType = IntuneTestUtils.PolicyType.Android;

          // Make sure policy is there
          client.android.getMAMPolicyById(location, policyId, null, null, function(err, result) {
            should.not.exist(err);
            should.exist(result);

            // Check that every property is written and retrieved correctly
            var accessRecheckOfflineTimeout = moment.duration(policyPayload.accessRecheckOfflineTimeout).toISOString();
            accessRecheckOfflineTimeout.should.be.equal(result.accessRecheckOfflineTimeout.toISOString());
            var accessRecheckOnlineTimeout = moment.duration(policyPayload.accessRecheckOnlineTimeout).toISOString();
            accessRecheckOnlineTimeout.should.be.equal(result.accessRecheckOnlineTimeout.toISOString());
            policyPayload.appSharingFromLevel.should.be.equal(result.appSharingFromLevel);
            policyPayload.appSharingToLevel.should.be.equal(result.appSharingToLevel);
            policyPayload.authentication.should.be.equal(result.authentication);
            policyPayload.clipboardSharingLevel.should.be.equal(result.clipboardSharingLevel);
            policyPayload.dataBackup.should.be.equal(result.dataBackup);
            policyPayload.pinNumRetry.should.be.equal(result.pinNumRetry);
            policyPayload.deviceCompliance.should.be.equal(result.deviceCompliance);
            policyPayload.fileSharingSaveAs.should.be.equal(result.fileSharingSaveAs);
            var offlineWipeTimeout = moment.duration(policyPayload.offlineWipeTimeout).toISOString();
            offlineWipeTimeout.should.be.equal(result.offlineWipeTimeout.toISOString());
            policyPayload.pin.should.be.equal(result.pin);
            policyPayload.description.should.be.equal(result.description);
            policyPayload.friendlyName.should.be.equal(result.friendlyName);
            policyPayload.screenCapture.should.be.equal(result.screenCapture);
            policyPayload.managedBrowser.should.be.equal(result.managedBrowser);
            policyPayload.fileEncryption.should.be.equal(result.fileEncryption);

            //result.should.be.equal(policyPayload);
            response.statusCode.should.equal(200);
            done();
          });
        });
      });

      it('- patchMAMPolicy', function(done) {
        var policyPatchPayload = IntuneTestUtils.getPolicyPatchPayload(IntuneTestUtils.PolicyType.Android);
        client.android.patchMAMPolicy(location, androidPolicyId, policyPatchPayload, null, function(error, result, request, response) {
          should.not.exist(error);
          should.exist(result);
          response.statusCode.should.equal(200);

          // Make sure policy is there
          client.android.getMAMPolicyById(location, androidPolicyId, null, null, function(error, result, request, response) {
            should.not.exist(error);
            should.exist(result);
            response.statusCode.should.equal(200);

            // Check if updated value was actually written on patch
            policyPatchPayload.friendlyName.should.be.equal(result.friendlyName);

            done();
          });
        });
      });

      it('- deleteMAMPolicy', function(done) {
        var policyPayload = IntuneTestUtils.getPolicyPutPayload(IntuneTestUtils.PolicyType.Android);
        var policyId = uuid.v4();
        client.android.createOrUpdateMAMPolicy(location, policyId, policyPayload, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);

          // Make sure policy is there
          client.android.deleteMAMPolicy(location, policyId, null, function(err, result, request, response) {
            should.not.exist(err);

            if (response.statusCode !== 200 && response.statusCode !== 204) {
              response.statusCode.should.be.equal('200 or 204');
            }

            done();
          });
        });
      });

      it('- getAppsForMAMPolicy', function(done) {
        client.android.getAppForMAMPolicy(location, androidPolicyId, null, null, null, null, function(err, result, request, response) {
          should.not.exist(err);
          should.exist(result);
          response.statusCode.should.equal(200);
          done();
        });
      });

      it('- addAppForMAMPolicy', function(done) {
        var appId = androidApps[0].name;
        var appProperties = {
          properties: {
            url: 'https://api-dogfood.resources.windows-int.net' + androidApps[0].id
          }
        };
        client.android.addAppForPolicy(location, androidPolicyId, appId, appProperties, null, function(err, result, request, response) {
          should.not.exist(err);

          if (response.statusCode !== 200 && response.statusCode !== 204) {
            response.statusCode.should.be.equal('200 or 204');
          }

          client.android.getAppForMAMPolicy(location, androidPolicyId, null, null, null, null, function(err, result, request, response) {
            should.not.exist(err);
            should.exist(result);
            response.statusCode.should.equal(200);

            // Make sure that the app was actually added
            var addedApp = result.filter(function(app) {
              return app.name == appId;
            });

            addedApp.length.should.be.equal(1);

            done();
          });
        });
      });

      it('- deleteAppForMAMPolicy', function(done) {
        var appId = androidApps[0].name;
        client.android.deleteAppForMAMPolicy(location, androidPolicyId, appId, null, function(err, result, request, response) {
          should.not.exist(err);

          if (response.statusCode !== 200 && response.statusCode !== 204) {
            response.statusCode.should.be.equal('200 or 204');
          }

          client.android.getAppForMAMPolicy(location, androidPolicyId, null, null, null, null, function(err, result, request, response) {
            should.not.exist(err);
            should.exist(result);
            response.statusCode.should.equal(200);

            // Make sure that the app was actually deleted
            var addedApp = result.filter(function(app) {
              return app.name == appId;
            });

            addedApp.length.should.be.equal(0);

            done();
          });
        });
      });
    });
  });
});
