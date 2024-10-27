package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AddNewMobile {

    private Response response;

    @Given("I set POST API endpoint")
    public void setPostApiEndpoint() {
        // Setting base URI
        baseURI = "https://api.restful-api.dev/objects";
    }

    // Positive Test Scenarios

    @When("I send a POST request with name {string} and data {string}: {int}, {string}: {double}, {string}: {string}, {string}: {string}")
    public void sendPostRequest(String name, String yearKey, Integer year, String priceKey, Double price, String cpuModelKey, String cpuModel, String hardDiskSizeKey, String hardDiskSize) {
        String body = String.format("{ \"name\": \"%s\", \"data\": { \"%s\": %d, \"%s\": %.2f, \"%s\": \"%s\", \"%s\": \"%s\" } }",
                name, yearKey, year, priceKey, price, cpuModelKey, cpuModel, hardDiskSizeKey, hardDiskSize);
        response = given()
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post();
    }

    @Then("I receive valid HTTP response code {int}")
    public void receiveValidHttpResponse(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("the response body contains a unique id and a createdAt timestamp")
    public void responseBodyContainsUniqueIdAndCreatedAt() {
        response.then()
                .body("id", notNullValue())
                .body("createdAt", notNullValue());
    }

    // Negative Test Scenarios

    @When("I send a POST request without a name field with data {string}: {int}, {string}: {double}, {string}: {string}, {string}: {string}")
    public void sendPostRequestWithoutNameField(String yearKey, Integer year, String priceKey, Double price, String cpuModelKey, String cpuModel, String hardDiskSizeKey, String hardDiskSize) {
        String body = String.format("{ \"data\": { \"%s\": %d, \"%s\": %.2f, \"%s\": \"%s\", \"%s\": \"%s\" } }",
                yearKey, year, priceKey, price, cpuModelKey, cpuModel, hardDiskSizeKey, hardDiskSize);
        response = given()
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post();
    }

    @When("I send a POST request with data {string}: {int}, {string}: {double}, {string}: {string}, {string}: {string}")
    public void sendPostRequestWithData(String yearKey, Integer year, String priceKey, Double price, String cpuModelKey, String cpuModel, String hardDiskSizeKey, String hardDiskSize) {
        String body = String.format("{ \"data\": { \"%s\": %d, \"%s\": %.2f, \"%s\": \"%s\", \"%s\": \"%s\" } }",
                yearKey, year, priceKey, price, cpuModelKey, cpuModel, hardDiskSizeKey, hardDiskSize);
        response = given()
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post();
    }

    @When("I send a POST request with name {string} and data {string}: {int}, {string}: {string}, {string}: {string}, {string}: {string}")
    public void sendPostRequestWithInvalidDataType(String name, String yearKey, Integer year, String priceKey, String price, String cpuModelKey, String cpuModel, String hardDiskSizeKey, String hardDiskSize) {
        String body = String.format("{ \"name\": \"%s\", \"data\": { \"%s\": %d, \"%s\": \"%s\", \"%s\": \"%s\", \"%s\": \"%s\" } }",
                name, yearKey, year, priceKey, price, cpuModelKey, cpuModel, hardDiskSizeKey, hardDiskSize);
        response = given()
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post();
    }
    @Then("I receive HTTP response code {int}")
    public void receiveHttpResponseCode(int statusCode) {
        response.then().statusCode(statusCode);
    }
    // Edge Cases

    @When("I send a POST request with a future year with name {string} and data {string}: {int}, {string}: {double}, {string}: {string}, {string}: {string}")
    public void sendPostRequestWithFutureYear(String name, String yearKey, Integer year, String priceKey, Double price, String cpuModelKey, String cpuModel, String hardDiskSizeKey, String hardDiskSize) {
        String body = String.format("{ \"name\": \"%s\", \"data\": { \"%s\": %d, \"%s\": %.2f, \"%s\": \"%s\", \"%s\": \"%s\" } }",
                name, yearKey, year, priceKey, price, cpuModelKey, cpuModel, hardDiskSizeKey, hardDiskSize);
        response = given()
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post();
    }

    @When("I send a POST request with maximum allowable price with name {string} and data {string}: {int}, {string}: {double}, {string}: {string}, {string}: {string}")
    public void sendPostRequestWithMaximumAllowablePrice(String name, String yearKey, Integer year, String priceKey, Double price, String cpuModelKey, String cpuModel, String hardDiskSizeKey, String hardDiskSize) {
        String body = String.format("{ \"name\": \"%s\", \"data\": { \"%s\": %d, \"%s\": %.2f, \"%s\": \"%s\", \"%s\": \"%s\" } }",
                name, yearKey, year, priceKey, price, cpuModelKey, cpuModel, hardDiskSizeKey, hardDiskSize);
        response = given()
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post();
    }

    @Then("I receive valid HTTP response code {int} or an appropriate status code")
    public void receiveValidHttpResponseCodeOrAppropriateStatusCode(int expectedStatusCode) {
        response.then().assertThat().statusCode(anyOf(is(expectedStatusCode), is(400), is(404), is(500)));
    }
}

