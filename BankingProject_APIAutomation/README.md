# BankingProjects API Automation using REST Assured
# Project Description : Implement an BDD API testing solution against an open API weather station available from https://openweathermap.org/stations URL 
# Author: anupam.mishra13@gmail.com
# Version : 1.0
# Status :Published
# Summary : Java Automation Framework in Cucumber (gherkin - BDD) with an open source UI test automation runtime-Rest Assured
# To implement an POST & GET Methods for an open API weather stations.
 
 This API framework has been implemented as POM (Page Object Model) structure  using java , Cucumber gherkins BDD and Rest Assured ( api services).

# Dependencies are in pom.xml)
        JUnit 4.11
        Rest-Assured 4.1.1
        Cucumber-Java 1.2.5
        jackson-databind 2.11.2
        Maven as Build tool
        GIT
 # Steps to follow :
 1. Pull the code form git hub.
 
 # Steps to Execute project:
 1. In Eclipse : File src\test\java\RestAssuredFrameworkWeatherAPI\RunFramework.java and  Run As : Junit
 2. Run CLI : "<code>mvn test -Dcucumber.options="--tags @Test"</code>"
 3. mvn test -Dcucumber.options="--tags @Test"
  
 
 # Output Results are stored in target folder.  
 1. JSON : ./target/cucumber-reports/Cucumber.json
 2. XML : ./target/cucumber-reports/Cucumber.xml
3. HTML: ./target/cucumber-reports/html/index.html

 # Jenkins Steps:
 1. Under Git Integration: pull source code from github:
<code>git clone git@github.com:ErAnupamMishra/BankingProject_APIAutomation.git </code>
2. Run commands: mvn test -Dcucumber.options="--tags @Test"
3. Maven run <code> Cucumber.options {...} </code> in RunFramework.java

# Snapshot
 Sample Snapshots are added under "RestAssuredFrameworkWeatherAPI\target\cucumber-reports" location
 
 
