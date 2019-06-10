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

describe("Stories iOS", function() {
  var browser;
	this.timeout(300000);

  before(function() {
//Comment out for SauceLabs tests
		browser = wd.promiseChainRemote("https://" + "iflsauce" + ":" + "3373089a-daf2-44cc-a711-588ffda735a9" + "@" + "ondemand.saucelabs.com:443/wd/hub");
		return browser.init(desire.storiesios);
    var passed = true;
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
    //SauceLabs.passed =  "true"
  return browser.quit();

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

  it("should display 'home' button in stories activities", function() {
    return browser
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]', 10000)
    .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      .click()
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeStaticText',10000)
      //home button
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeStaticText', 10000)
  });

  it.skip("should display pictures and close button in stories", function() {
    return browser
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeStaticText', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeStaticText')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 300000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeLink', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeLink')
      .click()
      //arrow
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeButton[2]', 10000)
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeImage', 10000)
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeButton[2]', 10000)
    .elementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeButton[2]')
      .click()
  });

  it.skip("Title/Home Screen", function() {
    return browser
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]', 10000)
    .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]/XCUIElementTypeLink', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]/XCUIElementTypeLink')
      .click()
  });

  it.skip("UI", function() {
    return browser
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]', 10000)
    .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeLink', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeLink')
      .click()
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]', 10000)
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeButton[2]', 10000)
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeButton[2]', 10000)
    .elementByXPath('//XCUIElementTypeOther[@name="Teacher Portal"]/XCUIElementTypeOther[2]/XCUIElementTypeButton[2]')
      .click()

  });

  it.skip("Goes to Leveled Texts", function() {
    return browser
    .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]', 10000)
    .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[3]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeOther[2]', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeOther[2]')
      .click()
    .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]/XCUIElementTypeLink', 10000)
    .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]/XCUIElementTypeLink')
      .click()
  });

});
