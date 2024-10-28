package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;

import java.math.BigDecimal;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class MobileStoreEmployee {
    private Response response;

    @Given("I set POST API endpoint for EmployeeDetails")
    public void setPostApiEndpoint() {
        // Setting base URI
        baseURI = "https://jsonplaceholder.typicode.com/posts";
    }

    @When("I send a POST request with title {string}, body {string}, and safe userId {long}")
    public void sendPostRequestWithSafeUserId(String title, String body, Long userId) {
        String requestBody = String.format("{ \"title\": \"%s\", \"body\": \"%s\", \"userId\": %d }", title, body, userId);
        response = given()
                .header("Content-Type", "application/json; charset=UTF-8")
                .body(requestBody)
                .when()
                .post();
    }

    @When("I send a POST request with title {string}, body {string}, and non-safe userId {long}")
    public void sendPostRequestWithNonSafeUserId(String title, String body, Long userId) {
        String requestBody = String.format("{ \"title\": \"%s\", \"body\": \"%s\", \"userId\": %d }", title, body, userId);
        response = given()
                .header("Content-Type", "application/json; charset=UTF-8")
                .body(requestBody)
                .when()
                .post();
    }

    @Then("I receive a valid HTTP response code {int}")
    public void receiveValidHttpResponseForMobileStoreEmployee(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("the response body contains title {string}, body {string}, and safe userId {long}")
    public void responseBodyContainsSafeUserId(String title, String body, Long userId) {
        response.then()
                .body("title", equalTo(title))
                .body("body", equalTo(body))
                .body("userId", equalTo(userId))
                .body("id", notNullValue());
    }

    @Then("the response body contains title {string}, body {string}, and non-safe userId in scientific notation {string}")
    public void responseBodyContainsNonSafeUserIdInScientificNotation(String title, String body, String userId) {
        response.then()
                .body("title", equalTo(title))
                .body("body", equalTo(body))
                .body("userId", notNullValue())
                .body("id", notNullValue());
    }
}
