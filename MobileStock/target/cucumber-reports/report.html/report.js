$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/edge_test_cases.feature");
formatter.feature({
  "name": "Add new post to EmployeeDetails for Mobile Store Employee",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new post with safe integer limit userId",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint for EmployeeDetails",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileStoreEmployee.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with title \"Manager\", body \"Branch - MediaMartUtrecht\", and safe userId 9007199254740991",
  "keyword": "When "
});
formatter.match({
  "location": "MobileStoreEmployee.sendPostRequestWithSafeUserId(String,String,Long)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a valid HTTP response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileStoreEmployee.receiveValidHttpResponseForMobileStoreEmployee(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body contains title \"Manager\", body \"Branch - MediaMartUtrecht\", and safe userId 9007199254740991",
  "keyword": "And "
});
formatter.match({
  "location": "MobileStoreEmployee.responseBodyContainsSafeUserId(String,String,Long)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new post with non-safe integer limit userId",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I set POST API endpoint for EmployeeDetails",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileStoreEmployee.setPostApiEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request with title \"Manager\", body \"Branch - MediaMartUtrecht\", and non-safe userId 9007199254740992",
  "keyword": "When "
});
formatter.match({
  "location": "MobileStoreEmployee.sendPostRequestWithNonSafeUserId(String,String,Long)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a valid HTTP response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileStoreEmployee.receiveValidHttpResponseForMobileStoreEmployee(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body contains title \"Manager\", body \"Branch - MediaMartUtrecht\", and non-safe userId in scientific notation \"9007199254740992L\"",
  "keyword": "And "
});
formatter.match({
  "location": "MobileStoreEmployee.responseBodyContainsNonSafeUserIdInScientificNotation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/negative_test_cases.feature");
formatter.feature({
  "name": "Delete Mobile",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Attempt to delete a reserved object ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a reserved object ID 6",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteMobile.aReservedObjectID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a DELETE request with reserved ID 6",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteMobile.iSendADeleteRequestWithReservedID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive HTTP response code 405 for reserved ID",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteMobile.iReceiveHttpResponseCodeForReservedID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should be an error message for reserved ID",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteMobile.theResponseShouldBeAnErrorMessageForReservedID()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Attempt to delete a non-existent object ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a non-existent object ID \"ewer\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteMobile.aNonExistentObjectID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a DELETE request with non-existent ID \"ewer\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteMobile.iSendADeleteRequestWithNonExistentID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive HTTP response code 404 for non-existent ID",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteMobile.iReceiveHttpResponseCodeForNonExistentID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should be an error message for non-existent ID",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteMobile.theResponseShouldBeAnErrorMessageForNonExistentID()"
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