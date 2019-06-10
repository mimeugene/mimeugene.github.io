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

describe("Family's Got Talent iOS", function() {
  var browser;
	this.timeout(300000);

  before(function() {
//Comment out for SauceLabs tests
		browser = wd.promiseChainRemote("https://" + "iflsauce" + ":" + "3373089a-daf2-44cc-a711-588ffda735a9" + "@" + "ondemand.saucelabs.com:443/wd/hub");
		return browser.init(desire.fgtios);
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
            .sendKeys("12345678")
          .elementById('Go!')
            .click()
          .waitForElementById("Log Out", 10000)
      });

      it("should have correct elements in fgt", function() {
        return browser
        //enter fgt game
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
        .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
          .click()
        // tap to start
        //XCUIElementTypeWebView from appium inspector
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView', 10000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView')
          .click()
          //instructional page (2) ("you're gonna be a star")
          //XCUIElementTypeScrollView from appium inspector
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView', 30000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView')
          .click()
        //instructional page (3)("first, add your pictures")
        //XCUIElementTypeImage from appium inspector
        ////XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage', 20000)
        .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage')
          .click()
          //instructional page (4)("use the sliders to line your face up with the oval, then tap save")
          //XCUIElementTypeOther from appium inspector
          ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
          .click()
          //instructional page (5)("Next tap record")
          //XCUIElementTypeOther from appium inspector
          ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
          .click()
          //instructional page (6)("when you are ready, select record ot record your song")
          //XCUIElementTypeOther from appium inspector
          ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther', 20000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther')
          .click()
          //instructional page (7)("Enjoy your video anytime from the main menu screen--let's go")
          //XCUIElementTypeOther from appium inspector
          ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 20000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
          .click()
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 20000)
        .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]')
          .click()
        // //lets go button
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]', 20000)
        .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]')
          .click()
        // .waitForElementById('Tap To Start', 10000)
        // .elementById('Tap To Start')
        //   .click()
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 10000)
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText', 10000)
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeStaticText', 10000)
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[5]/XCUIElementTypeStaticText', 10000)
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText')
          .click()
        //COMPLETE
      });

      it.skip("should open FGT homepage", function() {
      });

      it.skip("should open FGT homepage", function() {
        return browser
      });

      it.skip("should exit from FGT game", function() {
        return browser
        //enter fgt game
        // .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
        // .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
        //   .click()
        // .waitForElementById('Tap To Start', 10000)
        // .elementById('Tap To Start')
        //   .click()
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText')
          .click()
        //COMPLETE
      });

      it.skip("should be able to upload picture of student and player2", function(){
        return browser
        //enter fgt game
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
        .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
          .click()
        .waitForElementById('Tap To Start', 10000)
        .elementById('Tap To Start')
          .click()
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText')
          .click()
        //COMPLETE
      });

      it("should display 'home' button in FGT activity", function() {
        return browser
        });

      it("should have correct buttons in FGT activity", function() {
        return browser
        });

      it("should make sure record mode works", function() {
        return browser
        });

      it.skip("Recorded videos should appear in a video library", function() {
        return browser
        //enter fgt game
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
        .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
          .click()
        .waitForElementById('Tap To Start', 10000)
        .elementById('Tap To Start')
          .click()
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
        //photo 1
        .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 10000)
        .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]')
          .click()
        .waitForElementById("'s Photo", 10000)
        .elementById("'s Photo")
          .click()
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
          .click()
          //photo library
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeStaticText',10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeStaticText')
          .click()
        .waitForElementByXPath('//XCUIElementTypeAlert[@name="“TutorMate For Families” Would Like to Access Your Photos"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]', 10000)
        .elementByXPath('//XCUIElementTypeAlert[@name="“TutorMate For Families” Would Like to Access Your Photos"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]')
          .click()
        //choose photo
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]', 10000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]')
          .click()
        //chosing specific photo
        .waitForElementByXPath('//XCUIElementTypeCollectionView[@name="PhotosGridView"]/XCUIElementTypeCell[1]/XCUIElementTypeOther', 10000)
        .elementByXPath('//XCUIElementTypeCollectionView[@name="PhotosGridView"]/XCUIElementTypeCell[1]/XCUIElementTypeOther')
          .click()
        // done
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeNavigationBar/XCUIElementTypeButton[3]', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeNavigationBar/XCUIElementTypeButton[3]')
          .click()
        //save
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[2]', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[2]')
          .click()
        //photo 2
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText')
          .click()
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
          .click()
            //ID: Upload Player2's Photo
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
          .click()
          //photo library
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeStaticText',10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeStaticText')
          .click()
        //choose photo
        .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]', 10000)
        .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]')
          .click()
        //chosing specific photo
        .waitForElementByXPath('//XCUIElementTypeCollectionView[@name="PhotosGridView"]/XCUIElementTypeCell[1]/XCUIElementTypeOther', 10000)
        .elementByXPath('//XCUIElementTypeCollectionView[@name="PhotosGridView"]/XCUIElementTypeCell[1]/XCUIElementTypeOther')
          .click()
            // done
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeNavigationBar/XCUIElementTypeButton[3]', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeNavigationBar/XCUIElementTypeButton[3]')
          .click()
            //save
        .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[2]', 10000)
        .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[2]')
          .click()
      });

      // it.skip("should display 'home' button in FGT activity", function() {
      //   return browser
      //   //enter fgt game
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
      //     .click()
      //   .waitForElementById('Tap To Start', 10000)
      //   .elementById('Tap To Start')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .waitForElementByXPath('')
      //   .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeStaticText')
      //     .click()
      //   });
      //
      // it.skip("should have correct buttons in FGT activity", function() {
      //   return browser
      //   //enter fgt game
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
      //     .click()
      //   // tap to start
      //   //XCUIElementTypeWebView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView')
      //     .click()
      //     //instructional page (2) ("you're gonna be a star")
      //     //XCUIElementTypeScrollView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView', 30000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView')
      //     .click()
      //   //instructional page (3)("first, add your pictures")
      //   //XCUIElementTypeImage from appium inspector
      //   ////XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage')
      //     .click()
      //     //instructional page (4)("use the sliders to line your face up with the oval, then tap save")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (5)("Next tap record")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (6)("when you are ready, select record ot record your song")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther')
      //     .click()
      //     //instructional page (7)("Enjoy your video anytime from the main menu screen--let's go")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]')
      //     .click()
      //   // //lets go button
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]')
      //     .click()
      //
      //   .waitForElementById('Tap To Start', 10000)
      //   .elementById('Tap To Start')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   });
      //
      // it.skip("should make sure record mode works", function() {
      //   return browser
      //   //enter fgt game
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
      //     .click()
      //   // tap to start
      //   //XCUIElementTypeWebView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView')
      //     .click()
      //     //instructional page (2) ("you're gonna be a star")
      //     //XCUIElementTypeScrollView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView', 30000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView')
      //     .click()
      //   //instructional page (3)("first, add your pictures")
      //   //XCUIElementTypeImage from appium inspector
      //   ////XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage')
      //     .click()
      //     //instructional page (4)("use the sliders to line your face up with the oval, then tap save")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (5)("Next tap record")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (6)("when you are ready, select record ot record your song")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther')
      //     .click()
      //     //instructional page (7)("Enjoy your video anytime from the main menu screen--let's go")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]')
      //     .click()
      //   // //lets go button
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]')
      //     .click()
      //
      //   .waitForElementById('Tap To Start', 10000)
      //   .elementById('Tap To Start')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   });
      //
      // it.skip("Recorded videos should appear in a video library", function() {
      //   return browser
      //   //enter fgt game
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
      //     .click()
      //   // tap to start
      //   //XCUIElementTypeWebView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView')
      //     .click()
      //     //instructional page (2) ("you're gonna be a star")
      //     //XCUIElementTypeScrollView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView', 30000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView')
      //     .click()
      //   //instructional page (3)("first, add your pictures")
      //   //XCUIElementTypeImage from appium inspector
      //   ////XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage')
      //     .click()
      //     //instructional page (4)("use the sliders to line your face up with the oval, then tap save")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (5)("Next tap record")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (6)("when you are ready, select record ot record your song")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther')
      //     .click()
      //     //instructional page (7)("Enjoy your video anytime from the main menu screen--let's go")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]')
      //     .click()
      //   // //lets go button
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]')
      //     .click()
      //
      //   .waitForElementById('Tap To Start', 10000)
      //   .elementById('Tap To Start')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      // });
      //
      // it.skip("should be able to view completed video", function () {
      //   return browser
      //   //enter fgt game
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Family Portal"]/XCUIElementTypeLink[2]')
      //     .click()
      //   // tap to start
      //   //XCUIElementTypeWebView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView')
      //     .click()
      //     //instructional page (2) ("you're gonna be a star")
      //     //XCUIElementTypeScrollView from appium inspector
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView', 30000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeScrollView')
      //     .click()
      //   //instructional page (3)("first, add your pictures")
      //   //XCUIElementTypeImage from appium inspector
      //   ////XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther/XCUIElementTypeImage')
      //     .click()
      //     //instructional page (4)("use the sliders to line your face up with the oval, then tap save")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (5)("Next tap record")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //     //instructional page (6)("when you are ready, select record ot record your song")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther')
      //     .click()
      //     //instructional page (7)("Enjoy your video anytime from the main menu screen--let's go")
      //     //XCUIElementTypeOther from appium inspector
      //     ////XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]
      //   .waitForElementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeApplication[@name="TutorMate For Families"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[1]')
      //     .click()
      //   // //lets go button
      //   .waitForElementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]', 20000)
      //   .elementByXPath('//XCUIElementTypeOther[@name="Karaoke"]/XCUIElementTypeOther[2]')
      //     .click()
      //
      //   .waitForElementById('Tap To Start', 10000)
      //   .elementById('Tap To Start')
      //     .click()
      //   .waitForElementByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]', 10000)
      // });
      it.skip("should be able to view completed video", function () {
        return browser
      });
});
