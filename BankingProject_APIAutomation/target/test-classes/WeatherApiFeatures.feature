#Author:Anupam.mishra13@gmail.com
#Keywords Summary : Prject for Open Weather API Testing
#Feature: Positive and Negative Scenarios
#Scenario 1: Negative Scenario for Cucumber BDD and REST ASSURED framework.
#Given: Open Weather API should be accessible with Personal Key
#When: I have registered a station "without" APIKey and following values
#Then: I should receive message body with "cod" as "401"
#And: "message" as "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
#Scenario Outline: List of Positive Scenario for Cucumber BDD and REST ASSURED framework as an Examples
#Examples: Container for data input table

@OpenWeatherAPIFeatures
Feature: Weather Api Feature file for Positive and Negative Scenarios.

  @NegativeScenario @Test
  Scenario: Scenario 1: Validate that attempt to register a weather station without an API key will return response code as 401 and message as Invalid
    Given I want to Access OpenWeather URL
    When I have registered a station "without" APIKey and following values
      | external_id | name             | latitude | longitude | altitude |
      | TEST_NEG001 | POST without API |    33.33 |   -122.43 |      222 |
    Then I should receive message body with "cod" as "401"
    And I will receive message body with "message" as "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."

  @PositiveScenarios @Test
  Scenario Outline: Validate flow for multiple positive scenarios:
    	Scenario 2: Triggering Successful POST Request to store weather station
        Scenario 3: Triggering Successful GET Request for stored weather station

    # Scenario 2 - Triggering Successful two POST Requests to store weather station and validate success HTTP response code is 201.
    When I register a new station to OpenWhetherMap with values of "<external_id>","<name>","<latitude>","<longitude>","<altitude>"
    Then I get HTTP response code of "201"
    # Scenario 3 - Triggering Successful GET Request using [GET] /stations API and verifying that stations were successfully stored in the DB and their values are the same as specified in the registration request
    Then I see response json has values of "<external_id>","<name>","<latitude>","<longitude>","<altitude>"

    Examples: 
      | external_id  | name                       | latitude | longitude | altitude |
      | DEMO_TEST001 | Team Demo Test Station 001 |    33.33 |   -122.43 |      222 |
      | DEMO_TEST002 | Team Demo Test Station 002 |    44.44 |   -122.44 |      111 |
