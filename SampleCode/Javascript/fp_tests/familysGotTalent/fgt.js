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

describe("Family's Got Talent", function() {
  var browser;
	this.timeout(300000);

  before(function() {
//Comment out for SauceLabs tests
		browser = wd.promiseChainRemote("https://" + "iflsauce" + ":" + "3373089a-daf2-44cc-a711-588ffda735a9" + "@" + "ondemand.saucelabs.com:443/wd/hub");
		return browser.init(desire.fgt);
    var passed = true;
    sauceJobUpdate("name") = "job"
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
//wait for elemet to exist and click when confirmed
          .waitForElementById('username', 10000)
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

//       Then I should arrive on a page where four elements should be present
//       And the four elements are the "students picture, guardians picture, the record song button, and watch video button"'
it("should have correct elements in fgt", function() {
  return browser
  .waitForElementByXPath(locator.familiesGotTalent, 10000)
    .elementByXPath(locator.familiesGotTalent)
      .click()
  .waitForElementById('intro-1', 10000)
  .elementById('intro-1')
    .click()
  .elementById('intro-2')
    .click()
  .elementById('intro-3')
    .click()
  .elementById('intro-4')
    .click()
  .elementById('intro-5')
    .click()
  .elementById('intro-6')
    .click()
  .elementById('intro-7')
    .click()
  .elementById('Tap To Start')
    .click()
  .waitForElementById('photo-student' ,10000)
  .waitForElementById('photo-player2' ,10000)
  .waitForElementById( 'Record Song Together',10000)
  .waitForElementById('Watch' ,10000)
  .elementById('Exit')
    .click()
});

it("should open FGT homepage", function() {
  return browser
  .waitForElementByXPath(locator.familiesGotTalent, 10000)
    .elementByXPath(locator.familiesGotTalent)
      .click()
  .elementById('Tap To Start')
    .click()
.waitForElementById('Karaoke', 10000)
.elementById('Exit')
  .click()
});

it("should exit from FGT game", function() {
  return browser
  //clicking on game in game selection page
  .waitForElementByXPath(locator.familiesGotTalent, 10000)
  .elementByXPath(locator.familiesGotTalent)
    .click()
  //progressing through instructional pages
  .elementById('Tap To Start')
    .click()
    // exitting game
  .waitForElementById('Exit', 10000)
    .click()
    //finding an element back on game selecton page
  .waitForElementById('Choose a Game', 10000)
      });

it.skip("should be able to upload picture of student and player2", function(){
  return browser
  //clicking on game in game selection page
  .waitForElementByXPath(locator.familiesGotTalent, 10000)
  .elementByXPath(locator.familiesGotTalent)
    .click()
  // instructional pages
  .elementById('Tap To Start')
    .click()
  //uploading photo for student
  .waitForElementById('photo-student', 10000)
  .elementById('photo-student')
    .click()
  .waitForElementById('camera_alt CHOOSE', 10000)
  .elementById('camera_alt CHOOSE')
    .click()
  .waitForElementById('com.android.packageinstaller:id/permission_allow_button', 10000)
  .elementById('com.android.packageinstaller:id/permission_allow_button')
    .click()
  .waitForElementById('com.android.packageinstaller:id/permission_allow_button', 10000)
  .elementById('com.android.packageinstaller:id/permission_allow_button')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout')
    .click()
  .waitForElementById('android:id/decor_content_parent', 10000)
  .elementById('android:id/decor_content_parent')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout')
    .click()
  .waitForElementById('com.motorola.camera:id/review_approve', 10000)
  .elementById('com.motorola.camera:id/review_approve')
    .click()
  .waitForElementById('done SAVE', 10000)
  .elementById('done SAVE')
    .click()
  //repeat for player 2
  .waitForElementById('photo-player2', 10000)
  .elementById('photo-player2')
    .click()
  .waitForElementById('camera_alt CHOOSE', 10000)
  .elementById('camera_alt CHOOSE')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout')
    .click()
  .waitForElementById('android:id/decor_content_parent', 10000)
  .elementById('android:id/decor_content_parent')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout')
    .click()
  .waitForElementById('com.motorola.camera:id/review_approve', 10000)
  .elementById('com.motorola.camera:id/review_approve')
    .click()
  .waitForElementById('done SAVE', 20000)
  .elementById('done SAVE')
    .click()
  .waitForElementById('Record Song Together', 10000)
  .elementById('Exit')
    .click()
});

it.skip("should display 'home' button in FGT activity", function() {
  return browser
  .waitForElementByXPath(locator.familiesGotTalent, 10000)
    .elementByXPath(locator.familiesGotTalent)
      .click()
  .elementById('Tap To Start')
    .click()
  // progressing to actual game
  .waitForElementById('radio_button_checked', 10000)
  .elementById('radio_button_checked')
    .click()
  .waitForElementById('btnHome', 10000)
  .elementById('btnHome')
    .click()
  //finding element on FGT homepage
  .waitForElementById('Record Song Together', 10000)
      });

it.skip("should have correct buttons in FGT activity", function() {
  return browser
  .waitForElementById('Record Song Together', 10000)
  .elementById('Record Song Together')
    .click()
  .waitForElementById('btnRecord', 10000)
  .waitForElementById('btnPlay', 10000)
  .waitForElementById('btnHome', 10000)
  .waitForElementById('btnLang', 10000)

        });
        // **should make sure record mode works**
        // ```cucumber
        // Feature: Family's Got Talent
        //
        // Scenario: user can record song
        // Given I am logged in and on the FGT home page
        // And have uploaded photos both players
        // When I click 'Record Song Together'
        // And click 'Record'
        // Then the music should play and lyrics are highlighted with the music
        // And the buttons for "Start, Restart, and Back to Main Menu" should appear
        // ```
it.skip("should make sure record mode works", function() {
  return browser
  .waitForElementById('btnRecord', 10000)
  .elementById('btnRecord')
  .click()
  // function isPlaying(audelem)
  //  {
  //    return !audelem.paused;
  //  }
  .waitForElementById('com.android.packageinstaller:id/permission_allow_button', 10000)
  .elementById('com.android.packageinstaller:id/permission_allow_button')
    .click()
  .waitForElementById('btnStop', 10000)
  .elementById('btnStop')
    .click()
  .waitForElementById('btnHome', 10000)
  .elementById('btnHome')
    .click()
  .waitForElementById('Exit', 10000)
  .elementById('Exit')
    .click()
  });

  // _____________________
  // **Recorded videos should appear in a video library**
  // ```cucumber
  // Feature: Family's Got Talent
  //
  // Scenario: Recorded videos appear under 'watch' button
  // Given I am logged in and on the home page with activity selection
  // When I click FGT
  // And have recorded a video
  // When I click Watch
  // Then I should see a library of previously recorded videos
  // ```
it.skip("Recorded videos should appear in a video library", function() {
  return browser
  //clicking on game in game selection page
  .waitForElementByXPath(locator.familiesGotTalent, 10000)
  .elementByXPath(locator.familiesGotTalent)
    .click()
  .waitForElementById('Tap To Start', 10000)
  .elementById('Tap To Start')
    .click()
  //uploading photo for student
  .waitForElementById('photo-student', 10000)
  .elementById('photo-student')
    .click()
  .waitForElementById('camera_alt CHOOSE', 10000)
  .elementById('camera_alt CHOOSE')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout')
    .click()
  .waitForElementById('android:id/decor_content_parent', 10000)
  .elementById('android:id/decor_content_parent')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout')
    .click()
  .waitForElementById('com.motorola.camera:id/review_approve', 10000)
  .elementById('com.motorola.camera:id/review_approve')
    .click()
  .waitForElementById('done SAVE', 10000)
  .elementById('done SAVE')
    .click()
  //repeat for player 2
  .waitForElementById('photo-player2', 10000)
  .elementById('photo-player2')
    .click()
  .waitForElementById('camera_alt CHOOSE', 10000)
  .elementById('camera_alt CHOOSE')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout')
    .click()
  .waitForElementById('android:id/decor_content_parent', 10000)
  .elementById('android:id/decor_content_parent')
    .click()
  .waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout', 10000)
  .elementByXPath('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.RelativeLayout')
    .click()
  .waitForElementById('com.motorola.camera:id/review_approve', 10000)
  .elementById('com.motorola.camera:id/review_approve')
    .click()
  .waitForElementById('done SAVE', 20000)
  .elementById('done SAVE')
    .click()
  .waitForElementById('Record Song Together', 10000)
  .elementById('Record Song Together')
    .click()
  .waitForElementById('btnRecord', 10000)
  .elementById('btnRecord')
    .click()
  .waitForElementById('btnStop', 20000)
  .elementById('btnStop')
    .click()
  .waitForElementById('btnSave', 10000)
  .elementById('btnSave')
    .click()
  .waitForElementById('btnHome', 10000)
  // use for-loop to ceate numerous videos
  //check for id on videos in video library
});


// _____________________
// **should be able to view completed video**
// ```cucumber
// Feature: Family's Got Talent
//
// Scenario: user can view recorded video
// Given I am logged in and on the FGT home page
// And have uploaded photos of both players
// When I have recorded a song
// And click save
// Then I should be directed to a page with the video and buttons "Play, Restart, and Pause"
// And if the user is missing their photo or recorded song
// Then the user should be directed to complete these steps
it("should be able to view completed video", function () {

});

});
