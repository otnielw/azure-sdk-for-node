// This file has been autogenerated.

var merge = function (uri, requestBody, options) { return this.intercept(uri, 'MERGE', requestBody, options); };
var patch = function (uri, requestBody, options) { return this.intercept(uri, 'PATCH', requestBody, options); };
exports.scopes = [[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><Metrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Metrics></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '78f83d8e-6a36-4c71-82ab-5f278fc9f104',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'af609383-0d22-456f-92b1-4713d66e1a0d',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:09 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><Metrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Metrics></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '285a650c-4ca2-4099-8cbf-766ee7051889',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3886c941-ad7a-4b34-bb4c-afbace5ff682',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><Metrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Metrics></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b732478c-008d-4717-b5eb-636712ee6908',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ecd9ae98-0376-40af-840b-27a1d4d26cc5',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:10 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue1')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5272e4b5-f178-42fd-a1e0-81a8b5e241bf',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue1?comp=metadata')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c9e8ba8d-5b7a-4062-8a91-a889dc9eca24',
  'x-ms-version': '2011-08-18',
  'x-ms-approximate-messages-count': '0',
  'x-ms-meta-class': 'test',
  date: 'Thu, 21 Feb 2013 00:29:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue1')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '03c95356-84b2-444f-9300-777a120c6f43',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e34e05fe-295b-4937-ba34-f9c49735537c',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:12 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue2')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a790bc79-6ef0-4407-9636-20740c1a1cd8',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue2')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd4966f85-5f6f-4ba2-9bec-815d302e8656',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue2</Name><Url>http://ciserversdk.queue.core.windows.net/queue2</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2d234de8-2c9b-4f79-a7da-a040841f2bb3',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue2')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '25de15a9-31b1-442a-a5c3-b45da566007d',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list&include=metadata')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4a775db6-71e0-47fd-9963-d65621602441',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue3')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '49185c53-8b01-4974-b93d-5a0220292cf0',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue4')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4531bbea-627d-4605-9ba1-377f944fbcc6',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list&include=metadata')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue3</Name><Url>http://ciserversdk.queue.core.windows.net/queue3</Url><Metadata /></Queue><Queue><Name>queue4</Name><Url>http://ciserversdk.queue.core.windows.net/queue4</Url><Metadata><class>test</class></Metadata></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '67270d6b-24d1-498e-90de-e9a8d3de1a15',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue3</Name><Url>http://ciserversdk.queue.core.windows.net/queue3</Url></Queue><Queue><Name>queue4</Name><Url>http://ciserversdk.queue.core.windows.net/queue4</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2db3d2fa-3f55-4b65-8b84-33001b3b8aee',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue4')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '308a9dd7-645d-4295-abff-acdb523a8a6a',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue3')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4e3bf29c-a8f7-4a5e-b12c-c17d4f15e27f',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:18 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue5')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f7f770e1-09a9-4acd-b993-def9325a5aea',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/queue5/messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '634a9ebc-8d2c-4cc9-a8a7-6cdc729570ba',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/queue5/messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '75e9d131-9593-4d9b-afd6-5266baabbe38',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue5/messages?numofmessages=1&peekonly=true')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>b5d390c6-8903-4194-8850-76ef81b023ce</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:19 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:19 GMT</ExpirationTime><DequeueCount>0</DequeueCount><MessageText>aGkgdGhlcmU=</MessageText></QueueMessage></QueueMessagesList>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c5111a93-48b6-4e91-aa7e-df4faacbee8a',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue5/messages')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>b5d390c6-8903-4194-8850-76ef81b023ce</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:19 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:19 GMT</ExpirationTime><DequeueCount>1</DequeueCount><PopReceipt>AgAAAAEAAAAAAAAAPMX9j8oPzgE=</PopReceipt><TimeNextVisible>Thu, 21 Feb 2013 00:29:51 GMT</TimeNextVisible><MessageText>aGkgdGhlcmU=</MessageText></QueueMessage></QueueMessagesList>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b64101bb-2c29-4699-9c04-dd2835719ac0',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue5/messages/b5d390c6-8903-4194-8850-76ef81b023ce?popreceipt=AgAAAAEAAAAAAAAAPMX9j8oPzgE%3D')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '59694129-f492-4502-a322-85407ff1677f',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue5/messages')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>aa694b38-7654-4fa1-8f41-a23d433ea973</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:20 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:20 GMT</ExpirationTime><DequeueCount>1</DequeueCount><PopReceipt>AgAAAAEAAAAAAAAABoPHkMoPzgE=</PopReceipt><TimeNextVisible>Thu, 21 Feb 2013 00:29:52 GMT</TimeNextVisible><MessageText>YnllIHRoZXJl</MessageText></QueueMessage></QueueMessagesList>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cfa5f9b7-d6f6-4a39-867d-c981a66c5846',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue5/messages')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'de821b62-8582-4f58-a9af-fc659a6b8f55',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue5/messages')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6db50816-b304-4175-9967-8dc6df8d5446',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue5</Name><Url>http://ciserversdk.queue.core.windows.net/queue5</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '385b65fe-d62c-4efc-90fc-2b0f502a58d9',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue5')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '06f811e9-8ad1-45c1-9594-0e7a7eb1c336',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:24 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue6')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8063db38-ac18-44ab-a89f-2918aaf06886',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/queue6/messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c4b4da01-f8cb-4209-b569-6dbcc93e5810',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue6</Name><Url>http://ciserversdk.queue.core.windows.net/queue6</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '81a39965-9d90-4d5f-9ae7-b2a8f1a50feb',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue6')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ee870d23-7ff1-4322-9289-95ae12ee97bb',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:26 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue7')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e4241950-b66e-4d8b-9467-5bef96cb373e',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue7?comp=metadata')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f7a7dfaa-45ee-40ef-a0fb-d8bca2742fe2',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue7</Name><Url>http://ciserversdk.queue.core.windows.net/queue7</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3fee8cb9-7a27-4015-a8f6-33d756c03883',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue7')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6bfdf04a-1df6-427e-9e7f-b143a695200e',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:27 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue8')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fe0a43a7-1701-44d2-acd0-3adc54a867eb',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue8?comp=metadata')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '58028cc1-a222-480b-b595-8a80b0888076',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue8?comp=metadata')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f07a6861-69d2-4b1d-9df3-be7d6c365f75',
  'x-ms-version': '2011-08-18',
  'x-ms-approximate-messages-count': '0',
  'x-ms-meta-class': 'test',
  date: 'Thu, 21 Feb 2013 00:29:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue8</Name><Url>http://ciserversdk.queue.core.windows.net/queue8</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '04e9900f-bd66-4d2d-b801-f58912f90923',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue8')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2603501a-8c62-4aff-b7de-8741c9031319',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:30 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue9')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '068f7275-e8c0-4b1f-b77e-fc5e40073aa3',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue9/messages')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c3258b4d-065b-40d6-af4f-8216f1d8d282',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/queue9/messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5a0b3d10-e825-4d04-9746-236a979ef5fb',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/queue9/messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '202e15c8-032f-4f72-83c3-ec677732816d',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue9/messages?peekonly=true')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>960f0ba4-e901-463e-b996-1b855afbbef3</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:32 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:32 GMT</ExpirationTime><DequeueCount>0</DequeueCount><MessageText>bXNnMQ==</MessageText></QueueMessage></QueueMessagesList>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cb1d93d2-ea48-43e7-b016-4d7f7f08f8b0',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue9/messages?numofmessages=2')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>960f0ba4-e901-463e-b996-1b855afbbef3</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:32 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:32 GMT</ExpirationTime><DequeueCount>1</DequeueCount><PopReceipt>AgAAAAEAAAAAAAAAaIGIl8oPzgE=</PopReceipt><TimeNextVisible>Thu, 21 Feb 2013 00:30:04 GMT</TimeNextVisible><MessageText>bXNnMQ==</MessageText></QueueMessage><QueueMessage><MessageId>e43f2fda-dc4f-4cbd-abd5-2144269b8a0d</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:33 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:33 GMT</ExpirationTime><DequeueCount>1</DequeueCount><PopReceipt>AgAAAAEAAAAAAAAAaIGIl8oPzgE=</PopReceipt><TimeNextVisible>Thu, 21 Feb 2013 00:30:04 GMT</TimeNextVisible><MessageText>bXNnMg==</MessageText></QueueMessage></QueueMessagesList>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b5d9e4e3-3b50-4ecf-bace-923c9777a7a8',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue9</Name><Url>http://ciserversdk.queue.core.windows.net/queue9</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '756b771c-6358-4df8-838e-96a1947a53ad',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue9')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fb8b33f0-e2ac-48b5-955e-50faf277d710',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:34 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .put('/queue10')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd9a485a3-67e3-46ee-8ad3-469ff7c22197',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/queue10/messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '500d386e-a530-4f60-ac31-a9c5a864e4cf',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/queue10/messages')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>450d0653-c8a9-4207-8bb2-897c9da3abfc</MessageId><InsertionTime>Thu, 21 Feb 2013 00:29:36 GMT</InsertionTime><ExpirationTime>Thu, 28 Feb 2013 00:29:36 GMT</ExpirationTime><DequeueCount>1</DequeueCount><PopReceipt>AgAAAAEAAAAAAAAAtvQfmcoPzgE=</PopReceipt><TimeNextVisible>Thu, 21 Feb 2013 00:30:06 GMT</TimeNextVisible><MessageText>aGkgdGhlcmU=</MessageText></QueueMessage></QueueMessagesList>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4fc4be59-108f-4d18-b870-019186016715',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/queue10/messages/450d0653-c8a9-4207-8bb2-897c9da3abfc?popreceipt=AgAAAAEAAAAAAAAAtvQfmcoPzgE%3D&visibilitytimeout=10', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '801b8028-2f81-4184-84b5-e69144aa6704',
  'x-ms-version': '2011-08-18',
  'x-ms-popreceipt': 'AwAAAAIAAAAAAAAAr2u5jcoPzgEBAAAA',
  'x-ms-time-next-visible': 'Thu, 21 Feb 2013 00:29:47 GMT',
  date: 'Thu, 21 Feb 2013 00:29:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues><Queue><Name>queue10</Name><Url>http://ciserversdk.queue.core.windows.net/queue10</Url></Queue></Queues><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8cb79f11-18ae-4424-b888-27bdffd1b785',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .delete('/queue10')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6384d320-5182-417e-b876-ad35fea7c35a',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:38 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/queue11/messages/mymsg?popreceipt=AgAAAAEAAACucgAAvMW8%2BdqjzAE%3D&visibilitytimeout=10', '*')
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>QueueNotFound</Code><Message>The specified queue does not exist.\nRequestId:279cdac9-fd19-4c7a-ac95-bf27a2dc8ad2\nTime:2013-02-21T00:29:40.2859724Z</Message></Error>", { 'content-length': '217',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '279cdac9-fd19-4c7a-ac95-bf27a2dc8ad2',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3393d866-743c-47fd-8eae-6e68275cad75',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:39 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3894938a-229a-4efb-9982-22000c806ed2',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:39 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.queue.core.windows.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"http://ciserversdk.queue.core.windows.net/\"><Queues /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '561e8d7d-14cc-4c52-8d42-1dfb1f84d342',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:41 GMT' });
 return result; }]];