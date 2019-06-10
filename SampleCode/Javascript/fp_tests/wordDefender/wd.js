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

describe("Word Defender", function() {
  var browser;
	this.timeout(300000);

  before(function() {
//Comment out for SauceLabs tests
		browser = wd.promiseChainRemote("https://" + "iflsauce" + ":" + "3373089a-daf2-44cc-a711-588ffda735a9" + "@" + "ondemand.saucelabs.com:443/wd/hub");
		return browser.init(desire.wordd);
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
				.sendKeys("maxwell@innovationsforlearning.org")
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
					.sendKeys("maxwell@innovationsforlearning.org")
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
				    .sendKeys("maxwell@innovationsforlearning.org")
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
            .sendKeys("maxwell@innovationsforlearning.org")
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
      it("Spanish instructions", function() {
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
          .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.View',10000)
        .elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.View')
            .click()
      });

      it("has back button", function() {
        return browser
        .waitForElementById('GO!', 10000)
        .elementById('GO!')
          .click()
        .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.View', 10000)
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

      it("Score accurate", function() {
        return browser
       .waitForElementById('0', 10000)
      });


      it("Exit game button", function() {
        return browser
        .waitForElementById('close', 10000)
        .elementById('close')
          .click()
        .waitForElementById('Choose a Game', 10000)
      });

      it("Enemy characters in the world", function() {
        return browser
        waitForElementByXPath(locator.wordDefender, 10000)
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
        .waitForElementByXPath('android.webkit.WebView[@content-desc="Family Portal"]/android.view.View[2]/android.view.View/android.view.View[3]', 10000)
        .waitForElementByXPath('android.webkit.WebView[@content-desc="Family Portal"]/android.view.View[2]/android.view.View/android.view.View[2]', 10000)
        .waitForElementByXPath('android.webkit.WebView[@content-desc="Family Portal"]/android.view.View[2]/android.view.View/android.view.View[1]', 10000)
        //animated
      });
});
