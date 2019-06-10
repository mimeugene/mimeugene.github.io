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

describe("Stories", function() {
  var browser;
	this.timeout(300000);

  before(function() {
//Comment out for SauceLabs tests
		browser = wd.promiseChainRemote("https://" + "iflsauce" + ":" + "3373089a-daf2-44cc-a711-588ffda735a9" + "@" + "ondemand.saucelabs.com:443/wd/hub");
		return browser.init(desire.stories);
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

  it.skip("should display incorrect password message", function() {
		return browser
//wait for element present before advancing
			.waitForElementsById('username', 300000)
//fill out username and wrong pass
			.elementById('username')
				.sendKeys("brian-fp@innovationsforlearning.org")
			.elementById('password')
				.sendKeys("<PASSWORD REMOVED>")
//click submit
			.elementById('Go!')
				.click()
//assert incorrect password field exists
			.waitForElementById("Incorrect username or password", 10000)
	  });


//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
		it.skip("should advance to the next page with correct credentials ", function() {
			return browser
				.waitForElementsById('username', 30000)
//fill out username and correct pass
				.elementById('password')
					.clear()
					.sendKeys("<PASSWORD REMOVED>")
//click submit
				.elementById('Go!')
					.click()
				.waitForElementsById('username', 30000)
				.elementById('username')
					.sendKeys("brian-fp@innovationsforlearning.org")
//code to bypass strange locator error
				.elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]")
					.click()
//
				.elementById('password')
					.sendKeys("<PASSWORD REMOVED>")
				.elementById('Go!')
					.click()
//assert next page exists (log out text)
				.waitForElementById("Log Out")
		});

	//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
			it.skip("should log out ", function() {
				return browser
					.elementById("Log Out")
						.click()
					.waitForElementById("for Families")
					.elementById('username')
				    .sendKeys("brian-fp@innovationsforlearning.org")
					// .elementById("for Families")
					// 	.click()
          .elementByXPath(locator.offscreen)
            .click()
					.elementById('password')
				    .sendKeys("<PASSWORD REMOVED>")
				  .elementById('Go!')
						.click()
				  .waitForElementById("Log Out")

			});

      it("should log in", function() {
        return browser
          .waitForElementById("username", 10000)
          .elementById('username')
            .sendKeys("mariam-fp@innovationsforlearning.org")
          // .elementById("for Families")
          // 	.click()
          .elementByXPath(locator.offscreen)
            .click()
          .elementById('password')
            .sendKeys("<PASSWORD REMOVED>")
          .elementById('Go!')
            .click()
          .waitForElementById("Log Out", 10000)
      });


      it("should display 'home' button in stories activities", function() {
        return browser
        .waitForElementByXPath(locator.stories, 10000)
        .elementByXPath(locator.stories)
          .click()
        .waitForElementById('Teacher Portal', 10000)
        .elementById('Teacher Portal')
          .click()
        .waitForElementById('Home', 10000)
          .click()
        .waitForElementById('Choose a Game', 10000)
});
it.skip("should display pictures and close button in stories", function() {
  return browser
  .waitForElementByXPath(locator.stories, 10000)
  .elementByXPath(locator.stories)
    .click()
  .waitForElementById('Teacher Portal', 10000)
  .elementById('Teacher Portal')
    .click()
  .waitForElementById('6. Spot', 10000)
  .elementById('6. Spot')
    .click()
  .waitForElementById('Spot', 10000)
  .waitForElementById('Spot')
  .waitForElementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.widget.Button[2]', 10000)
  .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.widget.Button[2]')
  .click()
  .waitForElementById('Choose a Story', 10000)
  .waitForElementById('Home', 10000)
  .elementById('Home')
  .click()
});

it("Title/Home Screen", function() {
  return browser
  .waitForElementByXPath(locator.stories, 10000)
  .elementByXPath(locator.stories)
    .click()
  .waitForElementById('Teacher Portal', 10000)
  .elementById('Teacher Portal')
    .click()
  .waitForElementById('Home', 10000)
  .elementById('Home')
  .click()
});

it.skip("UI", function() {
  return browser
  .waitForElementByXPath(locator.stories, 10000)
  .elementByXPath(locator.stories)
    .click()
  .waitForElementById('Teacher Portal', 10000)
  .elementById('Teacher Portal')
    .click()
  .waitForElementById('6. Spot', 10000)
  .elementById('6. Spot')
  .click()
  .waitForElementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[1]', 10000)
  .waitForElementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]', 10000)
  .waitForElementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.widget.Button[2]', 10000)
  .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.widget.Button[2]')
  .click()
  .waitForElementById('Home', 10000)
  .elementById('Home')
    .click()

});

it.skip("Goes to Leveled Texts", function() {
  return browser
  .waitForElementByXPath(locator.stories, 10000)
  .elementByXPath(locator.stories)
    .click()
  .waitForElementById('Teacher Portal', 10000)
  .elementById('Teacher Portal')
    .click()
  .waitForElementById('LEVELED TEXTS')
  .elementById('LEVELED TEXTS')
    .click()
  .waitForElementById('Home', 10000)
  .elementById('Home')
    .click()
  });
  // _____________________
  // **Last Page**
  // ```cucumber
  // Feature: stories
  //
  // Scenario: Shouldn't do anything at last page when going forward
  // Given inside one of the stories
  // When the player scrolls to the last page of the story
  // When the forward button is clicked
  // Then nothing should happen
  // ```
  it.skip("Last Page", function() {
    return browser
    .waitForElementByXPath(locator.stories, 10000)
    .elementByXPath(locator.stories)
      .click()
    .waitForElementById('Teacher Portal', 10000)
    .elementById('Teacher Portal')
      .click()
    .waitForElementById('1. Dane and Mike Run Away', 10000)
    .elementById('1. Dane and Mike Run Away')
      .click()
    // for (var i = 0; i <= 12; i++) {
    //   return browser
    //   .waitForElementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    //   .findElementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    //   .click()
    //   }
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    .elementByXPath('//android.webkit.WebView[@content-desc="Teacher Portal"]/android.view.View[2]/android.view.View/android.view.View/android.widget.Button[2]')
    .click()
    // return browser
    .elementById('1.“Who is home?” asked the boy. 2.“Dane and Mike!” said the girl.')
      .isVisible()
    // // .waitForConditionInBrowser(browser.textPresent('"Who is home?"', 'android:id/content'))

    });

  //first page fnxn
  //spanish instructions fnxn -- but there aren't spanish instructions in stories

});
