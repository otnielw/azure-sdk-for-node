// This file has been autogenerated.

var merge = function (uri, requestBody, options) { return this.intercept(uri, 'MERGE', requestBody, options); };
var patch = function (uri, requestBody, options) { return this.intercept(uri, 'PATCH', requestBody, options); };
exports.scopes = [[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('expretry1')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:27:39Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry1')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>expretry1</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'expretry1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '168058d7-85e2-46b6-bd3e-5de476cc71bb',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>TableAlreadyExists</code>\r\n  <message xml:lang=\"en-US\">The table specified already exists.\nRequestId:bb8f009f-9e9f-4f70-924e-7d19dbdb0322\nTime:2013-02-21T00:27:40.4296682Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bb8f009f-9e9f-4f70-924e-7d19dbdb0322',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:27:41Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>http://ciserversdk.table.core.windows.net/Tables('expretry1')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-02-21T00:27:41Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry1')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>expretry1</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fc8ed26d-939a-4a9c-abd1-d11fd276dff3',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27expretry1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b4640212-ba35-40a4-9e8f-0aca3e09281f',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:40 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('expretry2')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:27:42Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>expretry2</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9e0b3aa0-55d2-4c23-8c62-8d109d5a3690',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1844c4ec-7b84-4906-afb9-88e17ad00ff3',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>TableBeingDeleted</code>\r\n  <message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:c5b382b3-8956-4633-b428-359f0ac48091\nTime:2013-02-21T00:27:43.1707444Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c5b382b3-8956-4633-b428-359f0ac48091',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:27:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('expretry2')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:28:21Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>expretry2</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3882ac81-d821-4911-9013-087f60718963',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:28:22Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>http://ciserversdk.table.core.windows.net/Tables('expretry2')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-02-21T00:28:22Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>expretry2</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a69830c5-b232-4d86-9066-02e50169f687',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '90f4929d-2374-487f-a2c2-f281d7fcae40',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:22 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:3c1176ac-b267-4951-b05f-2c3425298343\nTime:2013-02-21T00:28:22.8836904Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3c1176ac-b267-4951-b05f-2c3425298343',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:33e05cee-0b0c-4e46-8dd7-c4d837723dbe\nTime:2013-02-21T00:28:26.2006535Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '33e05cee-0b0c-4e46-8dd7-c4d837723dbe',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:56cb3ce7-69af-4a2c-88a3-ea553e48406b\nTime:2013-02-21T00:28:29.8282763Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '56cb3ce7-69af-4a2c-88a3-ea553e48406b',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:28:30Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7abb9286-0ce6-4115-8879-0f954ebcc6b3',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:30 GMT' });
 return result; }]];