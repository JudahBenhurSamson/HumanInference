package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class DeleteMobile {
    private Response response;
    private final String baseUrl = "https://api.restful-api.dev/objects/";

    @Given("a reserved object ID {int}")
    public void aReservedObjectID(int objectId) {
        baseURI = baseUrl;
    }

    @When("I send a DELETE request with reserved ID {int}")
    public void iSendADeleteRequestWithReservedID(int objectId) {
        response = given().when().delete(String.valueOf(objectId));
    }

    @Then("I receive HTTP response code {int} for reserved ID")
    public void iReceiveHttpResponseCodeForReservedID(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("the response should be an error message for reserved ID")
    public void theResponseShouldBeAnErrorMessageForReservedID() {
        response.then().body("error", equalTo("6 is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id."));
    }

    @Given("a non-existent object ID {string}")
    public void aNonExistentObjectID(String objectId) {
        baseURI = baseUrl;
    }

    @When("I send a DELETE request with non-existent ID {string}")
    public void iSendADeleteRequestWithNonExistentID(String objectId) {
        response = given().when().delete(objectId);
    }

    @Then("I receive HTTP response code {int} for non-existent ID")
    public void iReceiveHttpResponseCodeForNonExistentID(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("the response should be an error message for non-existent ID")
    public void theResponseShouldBeAnErrorMessageForNonExistentID() {
        response.then().body("error", equalTo("Object with id = ewer doesn't exist."));
    }
}
