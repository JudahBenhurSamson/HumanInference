Feature: Mobile Store Employee

  Scenario: Employee with with safe integer limit userId
    Given I set POST API endpoint for EmployeeDetails
    When I send a POST request with title "Manager", body "Branch - MediaMartUtrecht", and safe userId 9007199254740991
    Then I receive a valid HTTP response code 201
    And the response body contains title "Manager", body "Branch - MediaMartUtrecht", and safe userId 9007199254740991

  Scenario: Employee with with safe integer limit userId
    Given I set POST API endpoint for EmployeeDetails
    When I send a POST request with title "Manager", body "Branch - MediaMartUtrecht", and non-safe userId 9007199254740992
    Then I receive a valid HTTP response code 201
    And the response body contains title "Manager", body "Branch - MediaMartUtrecht", and non-safe userId in scientific notation "9007199254740992L"
