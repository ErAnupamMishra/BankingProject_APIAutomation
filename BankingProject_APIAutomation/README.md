﻿# BankingProjects
# Project Description : Coding a borrowing calculator for a Bank 
# Author: anupam.mishra13@gmail.com
# Version : 1.0
# Status :Published
# Summary : JavaScript Automation Framework in Cucumber (gherkin - BDD) with an open source UI test automation runtime-Puppeteer
# To build automated tests covering various use cases to verify that Loan calculator is working properly
 
Output Results is in Json and html and it will be stored under ./reports folder.
Browser supported: Chromium - default with Puppeteer
Run mode: CAn be modifed in .\features\step_definitions\stepFunctions.js for either Headless or Headful.
Dependencies and versions used (as in package.json)
        "cucumber": "^5.1.0",
        "cucumber-html-reporter": "^5.2.0",
        "puppeteer": "^5.4.1"
 # Steps to follow :
 1. Pull the code form git hub.
 2. Install node.js package
 # Steps to Execute project:
 1. Run CLI "<code>npm test</code>"
 2. Or in Visual Studio , open new terminal and execute : npm test
 3. After succesful execution , reports will be genrated 
 
 # Report location  under ./reports folder.  
 1.'cucumber_report.json' 
 2. 'cucumber_report.html' 

 # Jenkins Steps:
 1. Under Git Integration: pull source code from github:
<code>git clone git@github.com:ErAnupamMishra/BankingProject_APIAutomation.git </code>
2. Run commands: "<code>npm i</code>" and "<code>npm test</code>"

# Snapshot
 1. Sample Snapshots are added under "BankingProject_APIAutomation/target/cucumber-reports/" location
 
 
