$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WeatherApiFeatures.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:Anupam.mishra13@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : Prject for Open Weather API Testing"
    },
    {
      "line": 3,
      "value": "#Feature: Positive and Negative Scenarios"
    },
    {
      "line": 4,
      "value": "#Scenario 1: Negative Scenario for Cucumber BDD and REST ASSURED framework."
    },
    {
      "line": 5,
      "value": "#Given: Open Weather API should be accessible with Personal Key"
    },
    {
      "line": 6,
      "value": "#When: I have registered a station \"without\" APIKey and following values"
    },
    {
      "line": 7,
      "value": "#Then: I should receive message body with \"cod\" as \"401\""
    },
    {
      "line": 8,
      "value": "#And: \"message\" as \"Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.\""
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of Positive Scenario for Cucumber BDD and REST ASSURED framework as an Examples"
    },
    {
      "line": 10,
      "value": "#Examples: Container for data input table"
    }
  ],
  "line": 13,
  "name": "Weather Api Feature file for Positive and Negative Scenarios.",
  "description": "",
  "id": "weather-api-feature-file-for-positive-and-negative-scenarios.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 12,
      "name": "@OpenWeatherAPIFeatures"
    }
  ]
});
formatter.before({
  "duration": 502901999,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Scenario 1: Validate that attempt to register a weather station without an API key will return response code as 401 and message as Invalid",
  "description": "",
  "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;scenario-1:-validate-that-attempt-to-register-a-weather-station-without-an-api-key-will-return-response-code-as-401-and-message-as-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@NegativeScenario"
    },
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I want to Access OpenWeather URL",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I have registered a station \"without\" APIKey and following values",
  "rows": [
    {
      "cells": [
        "external_id",
        "name",
        "latitude",
        "longitude",
        "altitude"
      ],
      "line": 19
    },
    {
      "cells": [
        "TEST_NEG001",
        "POST without API",
        "33.33",
        "-122.43",
        "222"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive message body with \"cod\" as \"401\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I will receive message body with \"message\" as \"Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefWeatherMap.I_Want_To_Access_OpenWeather_URL()"
});
formatter.result({
  "duration": 131091600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 29
    }
  ],
  "location": "StepDefWeatherMap.i_Have_Registered_Station_Without_APIKey_And_Following_Values(String,DataTable)"
});
formatter.result({
  "duration": 1932864900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cod",
      "offset": 36
    },
    {
      "val": "401",
      "offset": 45
    }
  ],
  "location": "StepDefWeatherMap.i_Should_Receive_Message_Body_With(String,String)"
});
formatter.result({
  "duration": 2034100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 34
    },
    {
      "val": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.",
      "offset": 47
    }
  ],
  "location": "StepDefWeatherMap.i_Will_Receive_Message_Body_With(String,String)"
});
formatter.result({
  "duration": 299513400,
  "status": "passed"
});
formatter.after({
  "duration": 97400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Validate flow for multiple positive scenarios:",
  "description": "\tScenario 2: Triggering Successful POST Request to store weather station\n    Scenario 3: Triggering Successful GET Request for stored weather station",
  "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@PositiveScenarios"
    },
    {
      "line": 24,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "# Scenario 2 - Triggering Successful two POST Requests to store weather station and validate success HTTP response code is 201."
    }
  ],
  "line": 30,
  "name": "I register a new station to OpenWhetherMap with values of \"\u003cexternal_id\u003e\",\"\u003cname\u003e\",\"\u003clatitude\u003e\",\"\u003clongitude\u003e\",\"\u003caltitude\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I get HTTP response code of \"201\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Scenario 3 - Triggering Successful GET Request using [GET] /stations API and verifying that stations were successfully stored in the DB and their values are the same as specified in the registration request"
    }
  ],
  "line": 33,
  "name": "I see response json has values of \"\u003cexternal_id\u003e\",\"\u003cname\u003e\",\"\u003clatitude\u003e\",\"\u003clongitude\u003e\",\"\u003caltitude\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:;",
  "rows": [
    {
      "cells": [
        "external_id",
        "name",
        "latitude",
        "longitude",
        "altitude"
      ],
      "line": 36,
      "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:;;1"
    },
    {
      "cells": [
        "DEMO_TEST001",
        "Team Demo Test Station 001",
        "33.33",
        "-122.43",
        "222"
      ],
      "line": 37,
      "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:;;2"
    },
    {
      "cells": [
        "DEMO_TEST002",
        "Team Demo Test Station 002",
        "44.44",
        "-122.44",
        "111"
      ],
      "line": 38,
      "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1243900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validate flow for multiple positive scenarios:",
  "description": "\tScenario 2: Triggering Successful POST Request to store weather station\n    Scenario 3: Triggering Successful GET Request for stored weather station",
  "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@PositiveScenarios"
    },
    {
      "line": 12,
      "name": "@OpenWeatherAPIFeatures"
    },
    {
      "line": 24,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "# Scenario 2 - Triggering Successful two POST Requests to store weather station and validate success HTTP response code is 201."
    }
  ],
  "line": 30,
  "name": "I register a new station to OpenWhetherMap with values of \"DEMO_TEST001\",\"Team Demo Test Station 001\",\"33.33\",\"-122.43\",\"222\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I get HTTP response code of \"201\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Scenario 3 - Triggering Successful GET Request using [GET] /stations API and verifying that stations were successfully stored in the DB and their values are the same as specified in the registration request"
    }
  ],
  "line": 33,
  "name": "I see response json has values of \"DEMO_TEST001\",\"Team Demo Test Station 001\",\"33.33\",\"-122.43\",\"222\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST001",
      "offset": 59
    },
    {
      "val": "Team Demo Test Station 001",
      "offset": 74
    },
    {
      "val": "33.33",
      "offset": 103
    },
    {
      "val": "-122.43",
      "offset": 111
    },
    {
      "val": "222",
      "offset": 121
    }
  ],
  "location": "StepDefWeatherMap.i_HaveRegistered_A_New_Station_To_OpenWhetherMap_With_Values_Of(String,String,String,String,String)"
});
formatter.result({
  "duration": 604717101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 29
    }
  ],
  "location": "StepDefWeatherMap.i_get_HTTP_Response_Code_Of(String)"
});
formatter.result({
  "duration": 129600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST001",
      "offset": 35
    },
    {
      "val": "Team Demo Test Station 001",
      "offset": 50
    },
    {
      "val": "33.33",
      "offset": 79
    },
    {
      "val": "-122.43",
      "offset": 87
    },
    {
      "val": "222",
      "offset": 97
    }
  ],
  "location": "StepDefWeatherMap.i_See_Response_Json_Has_Values_Of(String,String,String,String,String)"
});
formatter.result({
  "duration": 50060700,
  "status": "passed"
});
formatter.after({
  "duration": 63399,
  "status": "passed"
});
formatter.before({
  "duration": 965899,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Validate flow for multiple positive scenarios:",
  "description": "\tScenario 2: Triggering Successful POST Request to store weather station\n    Scenario 3: Triggering Successful GET Request for stored weather station",
  "id": "weather-api-feature-file-for-positive-and-negative-scenarios.;validate-flow-for-multiple-positive-scenarios:;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@PositiveScenarios"
    },
    {
      "line": 12,
      "name": "@OpenWeatherAPIFeatures"
    },
    {
      "line": 24,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "# Scenario 2 - Triggering Successful two POST Requests to store weather station and validate success HTTP response code is 201."
    }
  ],
  "line": 30,
  "name": "I register a new station to OpenWhetherMap with values of \"DEMO_TEST002\",\"Team Demo Test Station 002\",\"44.44\",\"-122.44\",\"111\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I get HTTP response code of \"201\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Scenario 3 - Triggering Successful GET Request using [GET] /stations API and verifying that stations were successfully stored in the DB and their values are the same as specified in the registration request"
    }
  ],
  "line": 33,
  "name": "I see response json has values of \"DEMO_TEST002\",\"Team Demo Test Station 002\",\"44.44\",\"-122.44\",\"111\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST002",
      "offset": 59
    },
    {
      "val": "Team Demo Test Station 002",
      "offset": 74
    },
    {
      "val": "44.44",
      "offset": 103
    },
    {
      "val": "-122.44",
      "offset": 111
    },
    {
      "val": "111",
      "offset": 121
    }
  ],
  "location": "StepDefWeatherMap.i_HaveRegistered_A_New_Station_To_OpenWhetherMap_With_Values_Of(String,String,String,String,String)"
});
formatter.result({
  "duration": 596886801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 29
    }
  ],
  "location": "StepDefWeatherMap.i_get_HTTP_Response_Code_Of(String)"
});
formatter.result({
  "duration": 125900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST002",
      "offset": 35
    },
    {
      "val": "Team Demo Test Station 002",
      "offset": 50
    },
    {
      "val": "44.44",
      "offset": 79
    },
    {
      "val": "-122.44",
      "offset": 87
    },
    {
      "val": "111",
      "offset": 97
    }
  ],
  "location": "StepDefWeatherMap.i_See_Response_Json_Has_Values_Of(String,String,String,String,String)"
});
formatter.result({
  "duration": 44481900,
  "status": "passed"
});
formatter.after({
  "duration": 59800,
  "status": "passed"
});
});