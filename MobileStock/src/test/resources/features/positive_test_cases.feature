Feature: Add New Mobile To The Stock

  Scenario: Successfully add an Apple MacBook Pro 16 (2024)
    Given I set POST API endpoint
    When I send a POST request with name "Apple MacBook Pro 16" and data "year": 2024, "price": 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB"
    Then I receive valid HTTP response code 200
    And the response body contains a unique id and a createdAt timestamp

  Scenario: Successfully add an Apple MacBook Air 13 (2024)
    Given I set POST API endpoint
    When I send a POST request with name "Apple MacBook Air 13" and data "year": 2024, "price": 1299.99, "CPU model": "Intel Core i7", "Hard disk size": "512 GB"
    Then I receive valid HTTP response code 200
    And the response body contains a unique id and a createdAt timestamp
