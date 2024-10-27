Feature: Edge Cases Testing

  Scenario: Creating with a Future Year
    Given I set POST API endpoint
    When I send a POST request with name "Apple MacBook Pro 16" and data "year": 2030, "price": 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB"
    Then I receive valid HTTP response code 200 or an appropriate status code

  Scenario: Boundary Price Value
    Given I set POST API endpoint
    When I send a POST request with name "Apple MacBook Pro 16" and data "year": 2024, "price": 9999.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB"
    Then I receive valid HTTP response code 200 or an appropriate status code
