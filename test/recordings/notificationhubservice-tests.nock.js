// This file has been autogenerated.

var merge = function (uri, requestBody, options) { return this.intercept(uri, 'MERGE', requestBody, options); };
var patch = function (uri, requestBody, options) { return this.intercept(uri, 'PATCH', requestBody, options); };
exports.scopes = [[function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252f%2524Resources%252fNotificationHubs%26ExpiresOn%3d1361416954%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dUrD8exmJolKhO0Nas3IdFyKi0TOaiOTNRbcacqwEAlI%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '06f27287-833b-4d85-a608-60b1cbbcfdc8',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 21 Feb 2013 03:02:34 GMT',
  'content-length': '564' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs</id><updated>2013-02-21T03:02:37Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/myhubnotification</id><title type=\"text\">myhubnotification</title><published>2013-02-12T16:50:05Z</published><updated>2013-02-12T16:50:05Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhubnotification\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>ZEppKHp9Y2VxcVIvTThdaA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>aVc7c009QENaRF0kLXtqfQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/newstuff</id><title type=\"text\">newstuff</title><published>2013-02-13T13:54:19Z</published><updated>2013-02-13T13:54:19Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../newstuff\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>dHoyLkxFdHM9N3M0NHshTA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>T0hyOEdtIWdfQnw3KzhKcg==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub1%26ExpiresOn%3d1361416955%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dzxcNmzUiAxGTaH3J2i7K3bL7UGGv9bVEtC%252bXryoTO8w%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': 'a779b9df-aed9-4877-ac73-0293b5419af4',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 21 Feb 2013 03:02:35 GMT',
  'content-length': '542' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathub1', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub1</id><title type=\"text\">xplathub1</title><published>2013-02-21T03:02:37Z</published><updated>2013-02-21T03:02:37Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub1\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>akdoSlp0X2FIWzIzJih9Kg==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>OiRjXyY6WThXSzoqUC13eA==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:39 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs</id><updated>2013-02-21T03:02:41Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/myhubnotification</id><title type=\"text\">myhubnotification</title><published>2013-02-12T16:50:05Z</published><updated>2013-02-12T16:50:05Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhubnotification\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>ZEppKHp9Y2VxcVIvTThdaA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>aVc7c009QENaRF0kLXtqfQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/newstuff</id><title type=\"text\">newstuff</title><published>2013-02-13T13:54:19Z</published><updated>2013-02-13T13:54:19Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../newstuff\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>dHoyLkxFdHM9N3M0NHshTA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>T0hyOEdtIWdfQnw3KzhKcg==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub2%26ExpiresOn%3d1361416962%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dSqbQaKnxOW2FGuZVgS3mbbpe%252bg%252fTzSEeOq0VhJ1gtzg%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '2f46d170-9e8d-4732-92e4-68478c781d77',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 21 Feb 2013 03:02:41 GMT',
  'content-length': '546' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathub2', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub2</id><title type=\"text\">xplathub2</title><published>2013-02-21T03:02:41Z</published><updated>2013-02-21T03:02:41Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub2\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>T0o6VWljfSl9SSQoY19Ubw==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>TFleKWFleCpPazBzKihqbA==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .delete('/xplathub2')
  .reply(200, "", { 'content-length': '0',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:45 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs</id><updated>2013-02-21T03:02:47Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/myhubnotification</id><title type=\"text\">myhubnotification</title><published>2013-02-12T16:50:05Z</published><updated>2013-02-12T16:50:05Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhubnotification\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>ZEppKHp9Y2VxcVIvTThdaA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>aVc7c009QENaRF0kLXtqfQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/newstuff</id><title type=\"text\">newstuff</title><published>2013-02-13T13:54:19Z</published><updated>2013-02-13T13:54:19Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../newstuff\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>dHoyLkxFdHM9N3M0NHshTA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>T0hyOEdtIWdfQnw3KzhKcg==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub3%26ExpiresOn%3d1361416966%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dOeujcJYZeGQ0LlqMPm9xtwdf62qDhvksstinivpGAow%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '4bd117fd-d678-46b2-8251-f5f5ff6be95c',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 21 Feb 2013 03:02:46 GMT',
  'content-length': '538' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathub3', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub3</id><title type=\"text\">xplathub3</title><published>2013-02-21T03:02:48Z</published><updated>2013-02-21T03:02:48Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub3\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>b1RTYWJYe1A7O2ctWjljcg==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>Sl11fXkpQSNjTTpjZXNMVA==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub4%26ExpiresOn%3d1361416968%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dwunMznL0NOOGrOaTeQKiErUfvAjLnDQu7W4WWKz8fYM%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '7b05004e-a243-4364-8023-974268bfac65',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 21 Feb 2013 03:02:47 GMT',
  'content-length': '538' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathub4', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub4</id><title type=\"text\">xplathub4</title><published>2013-02-21T03:02:51Z</published><updated>2013-02-21T03:02:51Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub4\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>N1g9fUQ1PSlPZmFhKm81NA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>V0AoZ2QxMHhWIzdMMS5PVw==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs</id><updated>2013-02-21T03:02:54Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/myhubnotification</id><title type=\"text\">myhubnotification</title><published>2013-02-12T16:50:05Z</published><updated>2013-02-12T16:50:05Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhubnotification\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>ZEppKHp9Y2VxcVIvTThdaA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>aVc7c009QENaRF0kLXtqfQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/newstuff</id><title type=\"text\">newstuff</title><published>2013-02-13T13:54:19Z</published><updated>2013-02-13T13:54:19Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../newstuff\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>dHoyLkxFdHM9N3M0NHshTA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>T0hyOEdtIWdfQnw3KzhKcg==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/xplathub3</id><title type=\"text\">xplathub3</title><published>2013-02-21T03:02:48Z</published><updated>2013-02-21T03:02:48Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../xplathub3\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>b1RTYWJYe1A7O2ctWjljcg==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>Sl11fXkpQSNjTTpjZXNMVA==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/xplathub4</id><title type=\"text\">xplathub4</title><published>2013-02-21T03:02:51Z</published><updated>2013-02-21T03:02:51Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../xplathub4\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>N1g9fUQ1PSlPZmFhKm81NA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>V0AoZ2QxMHhWIzdMMS5PVw==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:53 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs</id><updated>2013-02-21T03:02:56Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/myhubnotification</id><title type=\"text\">myhubnotification</title><published>2013-02-12T16:50:05Z</published><updated>2013-02-12T16:50:05Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhubnotification\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>ZEppKHp9Y2VxcVIvTThdaA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>aVc7c009QENaRF0kLXtqfQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/newstuff</id><title type=\"text\">newstuff</title><published>2013-02-13T13:54:19Z</published><updated>2013-02-13T13:54:19Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../newstuff\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>dHoyLkxFdHM9N3M0NHshTA==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>T0hyOEdtIWdfQnw3KzhKcg==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub5%26ExpiresOn%3d1361416974%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dr%252bfrTN6taG8K1VMfwoax4e7nkkyeZmzn4n%252bVTL%252by3TM%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': 'e94ee2d1-8c5b-4ed7-bd7f-fbcf163ed4a5',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 21 Feb 2013 03:02:54 GMT',
  'content-length': '550' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathub5', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub5</id><title type=\"text\">xplathub5</title><published>2013-02-21T03:02:59Z</published><updated>2013-02-21T03:02:59Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub5\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>c1NGQVVQZWlkKys3KVBLKQ==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>VXBaNF9EW3E0OTBdcUxKLQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:02:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/xplathub5')
  .reply(200, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub5</id><title type=\"text\">xplathub5</title><published>2013-02-21T03:02:59Z</published><updated>2013-02-21T03:02:59Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub5\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>c1NGQVVQZWlkKys3KVBLKQ==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>VXBaNF9EW3E0OTBdcUxKLQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 21 Feb 2013 03:03:01 GMT' });
 return result; }]];