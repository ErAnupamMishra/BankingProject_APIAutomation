package RestAssuredFrameworkWeatherAPI.stepDefinitions;

import static java.util.Objects.isNull;
import static org.junit.Assert.assertEquals;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import RestAssuredFrameworkWeatherAPI.apiObjects.WeatherMapAPIObject;
import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefWeatherMap extends WeatherMapAPIObject {

	// Before Test
	@Before
	public void beforeAny() {
		System.out.println("\n------------------Scenario Started-------------------\n" + Scenario.class.getName());
	}

	// After Test
	@After
	public void afterAny() {
		System.out.println("\n------------------Scenario Ended-------------------\n " + Scenario.class.getName());
	}

	// Given I want to Access OpenWeather URL
	@Given("I want to Access OpenWeather URL$")
	public void I_Want_To_Access_OpenWeather_URL() throws Throwable {
		try {
			System.out.println("Should be able to access Open Weather URL");
		} catch (Exception e) {
			System.out.println("Open Weather URL is Unavailable");
			throw e;
		}
	}

	// I have registered a station without APIKey and following values
	@When("^I have registered a station \"([^\"]*)\" APIKey and following values$")
	public void i_Have_Registered_Station_Without_APIKey_And_Following_Values(String arg1, DataTable dt) {
		List<Map<String, String>> list = dt.asMaps(String.class, String.class);
		HashMap<String, Object> requestJson = new HashMap<>();
		String apiKey = "";
		if (arg1.equalsIgnoreCase("without")) {
			System.setProperty("apiKey", "");
		} else {
			System.setProperty("apiKey", APIKEY);
		}
		try {

			for (int i = 0; i < list.size(); i++) {
				requestJson.put("external_id", list.get(i).get(fields.EXTERNAL_ID.toString()));
				requestJson.put("name", list.get(i).get(fields.NAME.toString()));
				requestJson.put("latitude", Float.parseFloat(list.get(i).get(fields.LATITUDE.toString())));
				requestJson.put("longitude", Float.parseFloat(list.get(i).get(fields.LONGITUDE.toString())));
				requestJson.put("altitude", Float.parseFloat(list.get(i).get(fields.ALTITUDE.toString())));
				currentResponse = WeatherMapAPIObject.postStation(apiKey, requestJson);
				// Logging on screen
				System.out.println(
						"Below is POST Response for station registration \n" + currentResponse.getBody().print());
				System.out.println("Scenario 1: Test Step 1 is Passed");
			}
		} catch (NumberFormatException ex) {
			System.out.println("EXCEPTION Identified - Number Format Exception: " + ex.getMessage());
		} catch (Exception ex) {
			System.out.println("New Weather station cannot be registered for APIKey \t" + apiKey
					+ "\t Please provide a valid API Key");
		}
	}

	// I should receive message body with "cod" as "401"

	@Then("^I should receive message body with \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_Should_Receive_Message_Body_With(String code, String expectedMessage) throws Throwable {
		try {
			if (isNull(currentResponse)) {
				System.out.println("Response Body is null");
				System.out.println("Scenario 1: Test Step 2 is Failed");
			} else {

				String actualMessage = getStatusCode(currentResponse);
				System.out.println("Actual Response code is	\t" + actualMessage);
				System.out.println("Expected Response code is\t" + expectedMessage);
				assertEquals("Incorrect Code returned: The actual Code is " + actualMessage, expectedMessage,
						actualMessage);
				System.out.println("Scenario 1: Test Step 2 is Passed");
			}
		} catch (Exception e) {
			throw e;
		}
	}

//I will receive message body with "message" as "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
	@And("^I will receive message body with \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_Will_Receive_Message_Body_With(String code, String expectedMessage) throws Throwable {
		try {
			if (isNull(currentResponse)) {
				System.out.println("Response Body is null");
			} else {

				String actualMessage = getMessageBody(currentResponse);
				System.out.println("Actual Response Message is	\t" + actualMessage);
				System.out.println("Expected Response Message is	\t" + expectedMessage);
				assertEquals("Incorrect Message returned: The actual Message is " + actualMessage, expectedMessage,
						actualMessage);
				System.out.println("Scenario 1: Test Step 3 is Passed");
			}
		} catch (Exception e) {
			throw e;
		}
	}

	// When I register a new station to OpenWhetherMap with values of
	// "<external_id>","<name>","<latitude>","<longitude>","<altitude>"
	@When("^I register a new station to OpenWhetherMap with values of \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_HaveRegistered_A_New_Station_To_OpenWhetherMap_With_Values_Of(String external_id, String name,
			String longitude, String latitude, String altitude) throws Throwable {
		HashMap<String, Object> requestJson = createRequestJsonFromList(
				Arrays.asList(external_id, name, longitude, latitude, altitude));
		currentResponse = WeatherMapAPIObject.postStation(APIKEY, requestJson);
		latestStationID = getValueByKey(currentResponse, "ID"); // After register a station, using 'latestStationID'
	}

//Then I get HTTP response code of "201"
	@Then("^I get HTTP response code of \"([^\"]*)\"$")
	public void i_get_HTTP_Response_Code_Of(String expectedHTTPCode) throws Throwable {
		try {
			String actualHTTPCode = getStatusCode(currentResponse);
			if (isNull(currentResponse)) {
				System.out.println("Response Body is null");

			} else {

				assertEquals("Incorrect Code returned: The actual Code is " + actualHTTPCode, expectedHTTPCode,
						actualHTTPCode);
			}
		} catch (Exception e) {
			throw e;
		}

	}

	// Then I see response json has values of
	// "<external_id>","<name>","<latitude>","<longitude>","<altitude>"
	@Then("^I see response json has values of \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_See_Response_Json_Has_Values_Of(String strExternal_ID, String strName, String strLatitude,
			String strLongitude, String strAltitude) throws Throwable {
		try {
			if (isNull(currentResponse)) {
				System.out.println("Response Body is null");

			}
			List<String> actualList = new ArrayList<>();
			actualList.add(getValueByKey(currentResponse, fields.EXTERNAL_ID.toString()));
			actualList.add(getValueByKey(currentResponse, fields.NAME.toString()));
			actualList.add(getValueByKey(currentResponse, fields.LATITUDE.toString()));
			actualList.add(getValueByKey(currentResponse, fields.LONGITUDE.toString()));
			actualList.add(getValueByKey(currentResponse, fields.ALTITUDE.toString()));

			List<String> expectedList = Arrays.asList(strExternal_ID, strName, strLatitude, strLongitude, strAltitude);
			assertEquals(
					"MISMATCH ERROR: New station attributes is MISMATCH with Current station\n Actual Attributes are: "
							+ actualList.toString(),
					expectedList, actualList);
		} catch (Exception e) {
			throw e;
		}
	}
}
