package RestAssuredFrameworkWeatherAPI.apiObjects;

public interface APIInterface {
	/**
	 * 
	 * @author Anupam Mishra Interface for API framework to enables variables/Fields
	 *         to be a set of predefined constants
	 */

	enum fields {
		EXTERNAL_ID("external_id"), NAME("name"), LATITUDE("latitude"), LONGITUDE("longitude"), ALTITUDE("altitude"),
		ID("ID");
		private String pageText;

		fields(String pageText) {
			this.pageText = pageText;
		}

		@Override
		public String toString() {
			return this.pageText;
		}

	};
}
