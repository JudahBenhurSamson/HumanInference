package steps;

import io.qameta.allure.Step;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AddNewMobile {

    private Response response;

    @Step("Set POST API Endpoint")
    @Given("I set POST API endpoint")
    public void setPostApiEndpoint() {
        baseURI = "https://api.restful-api.dev/objects";
    }

    @Step("Send POST request with name: {0}, year: {1}, price: {2}, CPU model: {3}, Hard disk size: {4}")
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

    @Step("Validate HTTP response code {0}")
    @Then("I receive valid HTTP response code {int}")
    public void receiveValidHttpResponse(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Step("Validate response body contains unique id and createdAt timestamp")
    @Then("the response body contains a unique id and a createdAt timestamp")
    public void responseBodyContainsUniqueIdAndCreatedAt() {
        response.then()
                .body("id", notNullValue())
                .body("createdAt", notNullValue());
    }
}
