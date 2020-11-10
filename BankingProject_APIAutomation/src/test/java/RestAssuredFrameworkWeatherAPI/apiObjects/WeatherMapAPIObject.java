/**
 * @author Anupam Mishra
 * Page Object Model Implementation for API Framework 
 */
package RestAssuredFrameworkWeatherAPI.apiObjects;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.List;
import io.restassured.http.ContentType;
import io.restassured.path.json.exception.JsonPathException;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;

public class WeatherMapAPIObject implements APIInterface {

	// Anupam Mishra Profile Open Weather API generated API Key
	// fa55a32200fc02482dd4c49bef31517a ( Registered on 8 Oct 2020) */
	// Class Protected Parameters
	protected static final String APIKEY = "fa55a32200fc02482dd4c49bef31517a";
	protected static ResponseOptions<Response> currentResponse = null;
	protected static String latestStationID = "";

	// Class Private Parameters
	private static final String BASE_STATION_URI = "http://api.openweathermap.org/data/3.0/stations";
	private static RequestSpecification request = null;

	// Class Constructor
	public WeatherMapAPIObject() {
		request = given().contentType(ContentType.JSON);
	}

	/**
	 ** POST Method Implementation to register Weather Station
	 */
	public static ResponseOptions<Response> postStation(String apiKey, HashMap<String, Object> json) {
		ResponseOptions<Response> responseOptionReturn = null;
		try {
			responseOptionReturn = request.with().body(json).when().post(BASE_STATION_URI + "?APPID=" + apiKey);
		} catch (Exception e) {
			System.out.println("Exception Message Captured: " + e.getMessage());
		}
		// Return Response Object
		return responseOptionReturn;
	}

	// Get Status Code from response
	public String getStatusCode(ResponseOptions<Response> resp) {
		int statusCode = resp.getStatusCode();
		return String.valueOf(statusCode);
	}

	// Get Message from response body
	public String getMessageBody(ResponseOptions<Response> resp) {
		String message = resp.getBody().jsonPath().getString("message");
		return message;

	}

	/**
	 ** GEt Method Implementation to capture Weather Station details
	 */
	public String getValueByKey(ResponseOptions<Response> resp, String key) {
		String returnString = "";
		try {
			returnString = resp.getBody().jsonPath().get(key).toString();
		} catch (JsonPathException jsonEx) {
			System.out.println("EXCEPTION: JSON PATH NOT FOUND");
			returnString = "NA";
		}
		return returnString;
	}

	/**
	 ** Protected Method Implementation
	 */

	protected HashMap<String, Object> createRequestJsonFromList(List<String> list) {
		HashMap<String, Object> requestJson = new HashMap<>();
		requestJson.put(fields.EXTERNAL_ID.toString(), list.get(0));
		requestJson.put(fields.NAME.toString(), list.get(1));
		requestJson.put(fields.LATITUDE.toString(), Float.parseFloat(list.get(2)));
		requestJson.put(fields.LONGITUDE.toString(), Float.parseFloat(list.get(3)));
		requestJson.put(fields.ALTITUDE.toString(), Float.parseFloat(list.get(4)));
		return requestJson;
	}

}
