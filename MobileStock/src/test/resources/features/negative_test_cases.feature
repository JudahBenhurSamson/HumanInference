Feature: Validate Error Handling

  Scenario: Missing Required Fields
    Given I set POST API endpoint
    When I send a POST request with data "year": 2024, "price": 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB"
    Then I receive HTTP response code 200

  Scenario: Invalid Data Type for Price
    Given I set POST API endpoint
    When I send a POST request with name "Apple MacBook Pro 16" and data "year": 2024, "price": "one thousand eight hundred forty-nine", "CPU model": "Intel Core i9", "Hard disk size": "1 TB"
    Then I receive HTTP response code 200
