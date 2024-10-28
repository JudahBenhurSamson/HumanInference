Feature: Delete Mobile

  Scenario: Attempt to delete a reserved object ID
    Given a reserved object ID 6
    When I send a DELETE request with reserved ID 6
    Then I receive HTTP response code 405 for reserved ID
    And the response should be an error message for reserved ID

  Scenario: Attempt to delete a non-existent object ID
    Given a non-existent object ID "ewer"
    When I send a DELETE request with non-existent ID "ewer"
    Then I receive HTTP response code 404 for non-existent ID
    And the response should be an error message for non-existent ID
