// This file has been autogenerated.

var merge = function (uri, requestBody, options) { return this.intercept(uri, 'MERGE', requestBody, options); };
var patch = function (uri, requestBody, options) { return this.intercept(uri, 'PATCH', requestBody, options); };
exports.scopes = [[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('sharedkeytable1')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:29:45Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('sharedkeytable1')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>sharedkeytable1</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'sharedkeytable1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '69d2f56c-b503-48ae-aab6-9a92964c9f7e',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27sharedkeytable1%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('sharedkeytable1')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:29:46Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('sharedkeytable1')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>sharedkeytable1</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a4ca400a-3440-4656-b0dc-e750d840b192',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:29:46Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>http://ciserversdk.table.core.windows.net/Tables('sharedkeytable1')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-02-21T00:29:46Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('sharedkeytable1')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>sharedkeytable1</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '941f5506-8307-4f83-ae05-7287314ec51a',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27sharedkeytable1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '86ffcb7a-09d3-4b2c-8e13-fe7c420ecbcc',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:46 GMT' });
 return result; }]];