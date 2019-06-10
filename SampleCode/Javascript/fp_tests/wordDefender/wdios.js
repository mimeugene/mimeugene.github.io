var desire = require("../testConfig.js");
var locator = require("./locators.js");
var functions = require("./functions.js");
var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var assert = require('assert');
var webdriver = require ('selenium-webdriver');
var SauceLabs = require("saucelabs");
var saucelabs = new SauceLabs({
      username: "iflsauce",
      password: "<PASSWORD REMOVED>"
    });
//var command = require("./customCommands.js")


chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

describe("Word Defender iOS", function() {
  var browser;
	this.timeout(300000);

  before(function() {
//Comment out for SauceLabs tests
		browser = wd.promiseChainRemote("https://" + "iflsauce" + ":" + "3373089a-daf2-44cc-a711-588ffda735a9" + "@" + "ondemand.saucelabs.com:443/wd/hub");
		return browser.init(desire.wdios);
    var passed = true;
    // browser.getSession().then(function (session) {
    // process.env.SAUCE_SESSION_ID = session.getId();
//Comment out for local tests
		// browser = wd.promiseChainRemote("0.0.0.0", 4723);
    // return browser.init(desire.saucelabsios);
    // browser.getSession().then(function (sessionid){
    //   browser.sessionID = sessionid.id_;
    // });
  });

  beforeEach(function() {
  });
var passed;
  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      passed = false;
    }
  });
  after(function() {
    if (passed != false) {
    return browser.sauceJobStatus(true)
  }
  });


      it("should log in", function() {
        return browser
  //wait for elemet to exist and click when confirmed
          .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeTextField', 10000)
          .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeTextField')
            .sendKeys("mariam-fp@innovationsforlearning.org")
          .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeSecureTextField')
            .sendKeys("<PASSWORD REMOVED>")
          .elementById('Go!')
            .click()
          .waitForElementById("Log Out", 10000)
      });

      it.skip("Spanish instructions", function() {
        return browser
        .waitForElementByXPath(locator.wordDefender, 10000)
        .elementByXPath(locator.wordDefender)
          .click()
        .waitForElementById('com.android.packageinstaller:id/permission_allow_button', 10000)
        .elementById('com.android.packageinstaller:id/permission_allow_button')
          .click()
        .waitForElementById('GO!', 10000)
        .elementById('GO!')
          .click()
        .waitForElementById('GO!', 10000)
        .elementById('GO!')
          .click()
          .waitForElementById('GO!', 10000)
          .elementById('GO!')
            .click()
      });

      it.skip("has back button", function() {
        return browser
        .waitForElementById('GO!', 10000)
        .elementById('GO!')
          .click()
      });

      it.skip("The next players turn starts", function() {
        return browser
        .waitForElementById("Player 2's Turn", 10000)
      });

      it.skip("Timer resets when new player starts turn", function() {
        return browser
        .waitForElementById("Player 2's Turn", 10000)
        .waitForElementById('GO!', 10000)
        .elementById('GO!')
          .click()
      });

      it.skip("Exit game button", function() {
        return browser
        .waitForElementById('close', 10000)
        .elementById('close')
          .click()
        .waitForElementById('Choose a Game', 10000)
      });

});
