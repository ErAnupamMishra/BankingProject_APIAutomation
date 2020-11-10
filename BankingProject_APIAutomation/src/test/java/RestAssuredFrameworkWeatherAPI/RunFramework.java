/**
 * Runner for BDD implementation of Framework
 */
package RestAssuredFrameworkWeatherAPI;

/**
 * @author Anupam Mishra
 *
 */
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = {
		"RestAssuredFrameworkWeatherAPI/stepDefinitions" }, plugin = { "pretty",
				"json:target/cucumber-reports/Cucumber.json", "junit:target/cucumber-reports/Cucumber.xml",
				"html:target/cucumber-reports/html" }, monochrome = true, tags = { "@Test" })

public class RunFramework {
//  Runner for Framework
}
