$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/edge_test_cases.feature");
formatter.feature({
  "name": "Edge Cases Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Creating with a Future Year",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewMobile.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with name \"Apple MacBook Pro 16\" and data \"year\": 2030, \"price\": 1849.99, \"CPU model\": \"Intel Core i9\", \"Hard disk size\": \"1 TB\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewMobile.sendPostRequest(String,String,Integer,String,Double,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP response code 200 or an appropriate status code",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewMobile.receiveValidHttpResponseCodeOrAppropriateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Boundary Price Value",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewMobile.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with name \"Apple MacBook Pro 16\" and data \"year\": 2024, \"price\": 9999.99, \"CPU model\": \"Intel Core i9\", \"Hard disk size\": \"1 TB\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewMobile.sendPostRequest(String,String,Integer,String,Double,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP response code 200 or an appropriate status code",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewMobile.receiveValidHttpResponseCodeOrAppropriateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/negative_test_cases.feature");
formatter.feature({
  "name": "Validate Error Handling",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Missing Required Fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewMobile.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with data \"year\": 2024, \"price\": 1849.99, \"CPU model\": \"Intel Core i9\", \"Hard disk size\": \"1 TB\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewMobile.sendPostRequestWithData(String,Integer,String,Double,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive HTTP response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewMobile.receiveHttpResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Data Type for Price",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewMobile.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with name \"Apple MacBook Pro 16\" and data \"year\": 2024, \"price\": \"one thousand eight hundred forty-nine\", \"CPU model\": \"Intel Core i9\", \"Hard disk size\": \"1 TB\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewMobile.sendPostRequestWithInvalidDataType(String,String,Integer,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive HTTP response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewMobile.receiveHttpResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/positive_test_cases.feature");
formatter.feature({
  "name": "Add New Mobile To The Stock",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully add an Apple MacBook Pro 16 (2024)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewMobile.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with name \"Apple MacBook Pro 16\" and data \"year\": 2024, \"price\": 1849.99, \"CPU model\": \"Intel Core i9\", \"Hard disk size\": \"1 TB\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewMobile.sendPostRequest(String,String,Integer,String,Double,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewMobile.receiveValidHttpResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body contains a unique id and a createdAt timestamp",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewMobile.responseBodyContainsUniqueIdAndCreatedAt()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully add an Apple MacBook Air 13 (2024)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewMobile.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with name \"Apple MacBook Air 13\" and data \"year\": 2024, \"price\": 1299.99, \"CPU model\": \"Intel Core i7\", \"Hard disk size\": \"512 GB\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewMobile.sendPostRequest(String,String,Integer,String,Double,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewMobile.receiveValidHttpResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body contains a unique id and a createdAt timestamp",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewMobile.responseBodyContainsUniqueIdAndCreatedAt()"
});
formatter.result({
  "status": "passed"
});
});