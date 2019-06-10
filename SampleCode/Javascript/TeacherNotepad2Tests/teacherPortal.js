var loginCommands = {
  waitForPageDisplayed: function() {
    return this.waitForElementVisible("@email", 5000);
  },

  loginSuccessfully: function(email, password) {
    email = "teacher-portal@test.org";
    password = "<PASSWORD REMOVED>";
    this.setValue("@email", email)
      .setValue("@password", password);
    return this.click("@submit");
  },

  clickSubmit: function() {
    return this.click("@submit");
  },

  loginFailure: function() {
    this.setValue("@email", "test@email.com")
      .setValue("@password", "wrong");
    return this.click("@submit")
      .waitForElementPresent("@error", 5000);
  },

  forgotPassword: function() {
    this.click("@forgotPassword")
      .waitForElementPresent("@popup", 10000);
  },

  waitForLoadingIndicator: function() {
    return this.waitForElementPresent("@loadingIndicator", 5000);
  },

  waitForErrorDisplay: function() {
    return this.waitForElementPresent("@error", 5000);
  }
};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var letterCommands = {

  clickLetters: function() {
    this.click("@letterButton");
  },

  waitForLetterPresent: function() {
    return this.waitForElementVisible("@letterBoard");
  },

  draggablePresent: function() {
    return this.assert.visible("#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(2) > div > button > svg > use");
  },

  boardDraggableVisible: function(x) {
    x.useCss().assert.visible("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard");
  },

  backButtonPresent: function() {
    return this.useCss().assert.visible("@backButton")
  },

  dragTeacher: function(client) {
    client.moveToElement('//*[@id="applicationContainer"]/div[1]/div/div[2]/div/div[4]/div/div[1]/div', 0, 0)
    client.mouseButtonDown(0)
    client.moveToElement('//*[@id="applicationContainer"]/div[1]/div/div[2]/div/div[3]', 300, 200)
    client.mouseButtonUp(0)
  },

  dragStudent: function(x) {
    x.useXpath().click("//*[contains(text(), 'Letters')]");
    x.useCss();
    return this.api.waitForElementPresent("#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div", 5000);
    // return this.waitForElementPresent("@showPanel", 5000);
    x.click("@showPanel");
    x.waitForElementPresent("@studentWhiteboard");
    x.moveToElement('#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__bank.whiteboard__bank--inverted > div > div:nth-child(1)', 0, 0)
    x.mouseButtonDown(0);
    x.moveToElement('#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--inverted', 0, 0);
    x.mouseButtonUp(0)
    x.assert.visible("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--inverted > div > div");
    x.assert.visible("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard > div > div");
  },

  elementsVisible: function(x) {
    x.useXpath().click("//*[contains(text(), 'Letters')]");
    x.useCss();
    this.api.pause(500);
    // return this.waitForElementPresent("@letterBackButton", 5000);
    // return this.waitForElementPresent("@showPanel", 5000);
    // x.click("@showPanel");
    // return this.waitForElementPresent("@hidePanel", 5000);
  }

};
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
var conferencesCommands = {
  waitForPageDisplayed: function() {
    this.waitForElementPresent("@startSession", 20000);
    this.api.pause(1000);
  },

  assertsetting: function(){
    this.waitForElementPresent("#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(2) > div > div.panel__label");
    this.waitForElementPresent("#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(3) > div > div.panel__label");
    this.waitForElementPresent("#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(4) > div > div.panel__label");
    this.waitForElementPresent("#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(5) > div > div.panel__label");
  },

  startSession: function() {
    //this.useCss();
    this.click("@startSession");
  },

  logout: function() {
    this.click("@logout");
  },

  settings: function() {
    this.click("@setting");
  },
  loginWait: function() {
    this.click("#applicationContainer > div > div > header > nav > ul > li:nth-child(2) > a");
    //return this.waitForElementVisible("@email", 5000)
  },
  waitForSettingsDisplayed: function() {
    return this.waitForElementPresent("#applicationContainer > div > div > div.breacrumbNav > div:nth-child(1) > a", 5000);
  },
  studentPortal: function() {
    this.click("#applicationContainer > div > div > div.settingsNav > div > div:nth-child(3) > div");
    return this.waitForElementPresent("@studentSettingsContent");
    return this.waitForElementPresent("@mainMenu");
  }

};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var teacherWorkspaceCommands = {

  waitForPageDisplayed: function() {
    return this.waitForElementPresent("@workspace", 20000);
  },

  newNotes: function(){
    return this.click("@notesnew");
    waitForElementPresent("@notesnewpanel");
  },

  inputSearchParameter: function(){
    cat = "cat";
    this.setValue("@search", cat)
    return this.click("@goButton");
    waitForElementPresent("@catSelector");
  },

  inputSearchParameterStory: function(){
    cat = "cat";
    this.waitForElementPresent("@searchStories");
    this.setValue("@searchStories", cat)
    return this.click("@goButtonStories");
    waitForElementPresent("@catSelector");
  },

  masterListSearch: function(){
    cat = "cat";
    return this.click("@masterlist");
    this.waitForElementPresent("@masterListsearch");
    this.setValue("@masterlistsearch", cat)
    this.click("@masterlistsearchgo");
    this.waitForElementPresent("@catSelector");
  },

  flipWorks: function(){
  this.click ("@masterlist");
  this.waitForElementVisible("@zbutton");
  this.click("@zbutton");
  this.click("@flipbutton");
  this.waitForElementVisible("@flippedcontent");
  },

  picSwitchWorks: function(){
  this.waitForElementVisible("@bbutton");
  this.click ("@bbutton");
  this.waitForElementVisible("@basketball");
  this.click("@sliderchecked");
  this.expect.element("@basketball").to.not.be.present;
  this.click("@sliderunchecked")
  this.waitForElementVisible("@basketball");
  },

  readingAssessment: function(){
    this.click("@readingassessment");
    this.waitForElementPresent("@readinglevelg");
    this.click("@readinglevelg");
    this.waitForElementPresent("@readingassessmentpanel");
    this.click("@readingassessmentpanel");
    this.waitForElementPresent("@levelg");
    this.click("@starttimer");
    this.waitForElementPresent("@bathclear");
    this.click("@bathclear");
    this.waitForElementPresent("@bathyellow");
    this.click("@stopbutton");
    this.waitForElementPresent("@summarypanel");
    this.click("@savebutton");
  },

  waitForFeaturesDisplayed: function() {
    //Master List, Stage Stories, Leveled Texts, Advancement and Notes
    this.waitForElementPresent("@readingFoundation", 5000);
    this.waitForElementPresent("@masterlist", 5000);
    this.waitForElementPresent("@stageStory", 5000);
    this.waitForElementPresent("@leveledText", 5000);
    this.waitForElementPresent("@advancement", 5000);
    this.waitForElementPresent("@notes", 5000);
  },

  rf6: function(){
    this.selectReadingStage(6);
    this.expect.element('#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(1) > span').text.to.not.equal('READING FOUNDATION');
  },

  sibworks: function(){
    this.click("@stagestoriestab");
    this.waitForElementPresent("#thereddothat > a");
    this.click("#thereddothat > a");
    this.waitForElementPresent("#applicationContainer > div.story-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > img");
    this.setValue("#applicationContainer > div.story-overlay > div > div > div.story__reinforcement > div > input", "en");
    this.click("#applicationContainer > div.story-overlay > div > div > div.story__reinforcement > div > div");
    //this.expect("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(1)");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(2)");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(3)");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(4)");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(5)");
  },

  sibworksincorrect: function(){
    this.click("#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(3) > span");
    this.waitForElementPresent("#thereddothat > a");
    this.click("#thereddothat > a");
    this.waitForElementPresent("#applicationContainer > div.story-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > img");
    this.setValue("#applicationContainer > div.story-overlay > div > div > div.story__reinforcement > div > input", "zzzz");
    this.click("#applicationContainer > div.story-overlay > div > div > div.story__reinforcement > div > div");
    this.expect.element("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(1)").to.not.be.present;
    this.expect.element("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(3)").to.not.be.present;
    this.expect.element("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(4)").to.not.be.present;
    this.expect.element("#applicationContainer > div.js-overlay > div > div:nth-child(4) > nav > ul > li:nth-child(5)").to.not.be.present;
  },

  changesrs: function() {
    this.waitForElementPresent("@advancement", 5000);
    this.click("@advancement");
    this.click("@five");
    this.waitForElementPresent("@fivechanged");
    this.click("@four");
    this.waitForElementPresent("@fivechanged");
  },

  assessmenttiles: function() {
    this.click("@assessmentelement");
    this.click("@learningassessment");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__bank.whiteboard__bank--standard");
  },

  rlafunction: function() {
    this.waitForElementPresent("@advancement", 5000);
    this.click("@advancement");
    this.click("@rla");
    this.waitForElementPresent("@rlapopup");
  },

  endsession: function(){
    this.click("@endsessionbutton");
    this.waitForElementPresent("@notyet");
    this.click("@notyet");
    this.waitForElementPresent("@notes");
  },

  advancement: function() {
    this.waitForElementPresent("@advancement", 5000);
    this.click("@advancement");
    this.waitForElementPresent("@l");
    this.waitForElementPresent("@five");
  },

  descriptors: function() {
    this.waitForElementPresent("@advancement", 5000);
    this.click("@advancement");
    this.click("@helpbutton");
    this.waitForElementPresent("#ra-help-popup > div > div.content");
  },
  masterlistElements: function() {
    this.click("@masterlist");
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div.word-bank_nav-item.active", 15000);
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div:nth-child(2)", 5000);
    this.waitForElementPresent("#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div:nth-child(3)", 5000);
  },

  foundationActive: function(){
    this.click("@readingFoundation");
    this.assert.cssClassPresent("@readingFoundation", "st-active");
  },

  selectStimulus: function() {
    this.click("@readingFoundation");
    this.click("@tile");
  },
  selectLeveledText: function() {
    this.click("@leveledText");
  },
  selectStory: function() {
    this.click("@story");
  },
  selectStageStory: function() {
    this.click("@stageStory");
  },
  selectStageStoryContent: function() {
    this.click("@stage2");
  },
  selectReadingStage: function(rs) {
    var i;
    this.waitForElementPresent("@readingStageDown", 1000);
    for (i = 0; i < 9; i++) {
      this.click("@readingStageDown");
      this.api.pause(100);
    }
    for (i = 1; i < rs; i++) {
      this.click("@readingStageUp");
      this.api.pause(100);
    }
  },
  assertStoryElements: function() {
    return this.waitForElementPresent("@storyBackButton");
    return this.waitForElementPresent("@storyFlip");
    return this.waitForElementPresent("@storyContent");
    return this.waitForElementPresent("@storyText");
    return this.waitForElementPresent("@storyForward");
    return this.waitForElementPresent("@storyBack");
  },
  assertStageElements: function() {
    return this.waitForElementPresent("@stageBackButton");
    return this.waitForElementPresent("@stageFlip");
    return this.waitForElementPresent("@stageContent");
    return this.waitForElementPresent("@stageText");
    return this.waitForElementPresent("@stageForward");
    return this.waitForElementPresent("@stageBack");
  },

  autoMode: function() {
    this.click("@onsets");
    this.click("@autoModes");
    return this.waitForElementPresent("@onsetContent");
    this.click("@needsWork");
    return this.waitForElementPresent("@chantStimulus");
  },

  autoNext: function() {
    this.click("@autoNextButton");
  },

  mastered: function() {
    this.click("@goodSightWord");
    this.click("@needsWork");
    this.expect.element('#teacherWorkspaceContainer').to.have.css('@goodSightWord').which.equals('tile__title  st-needs_work st-selected');
    this.click("@goodSightWord");
    this.click("@learning");
    this.expect.element('#teacherWorkspaceContainer').to.have.css('@goodSightWord').which.equals('tile__title  st-learning st-selected');
    this.click("@goodSightWord");
    this.click("@mastered");
    this.expect.element('#teacherWorkspaceContainer').to.have.css('@goodSightWord').which.equals('tile__title  st-mastered st-selected');
  },

  onsetMastered: function() {
    this.click("@onsets");
    this.click("@onsetStimulus");
    this.click("@needsWork");
    this.expect.element('#teacherWorkspaceContainer').to.have.css('@onsetStimulus').which.equals('tile__title  st-needs_work st-selected');
    this.click("@onsetStimulus");
    this.click("@learning");
    this.expect.element('#teacherWorkspaceContainer').to.have.css('@onsetStimulus').which.equals('tile__title  st-learning st-selected');
    this.click("@onsetStimulus");
    this.click("@mastered");
    this.expect.element('#teacherWorkspaceContainer').to.have.css('@onsetStimulus').which.equals('tile__title  st-mastered st-selected');
  },
  readingStageChange: function() {
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@letterNames", 10000);
    this.click("@readingStageUp");
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@onsets", 10000);
    this.click("@readingStageUp");
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@onsets", 10000);
    this.click("@readingStageUp");
    return this.waitForElementPresent("@sightWords", 10000);
    return this.waitForElementPresent("@onsets", 10000);
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@stageStory", 10000);
    this.click("@readingStageUp");
    return this.waitForElementPresent("@sightWords", 10000);
    return this.waitForElementPresent("@onsets", 10000);
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@stageStory", 10000);
    this.click("@readingStageUp");
    this.click("@readingStageUp");
    this.click("@readingStageUp");
    return this.waitForElementPresent("@sightWords", 10000);
    return this.waitForElementPresent("@onsets", 10000);
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@affixs", 10000);
    this.click("@readingStageUp");
    return this.waitForElementPresent("@sightWords", 10000);
    return this.waitForElementPresent("@onsets", 10000);
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@affixs", 10000);
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    this.click("@readingStageDown");
    return this.waitForElementPresent("@leveledText", 10000);
    return this.waitForElementPresent("@letterNames", 10000);
  }
}

var studentWorkspaceCommands = {
  waitForPageDisplayed: function() {
    return this.waitForElementPresent("@workspace", 3 * 60 * 1000);
  },

doesNotOpen: function() {
  this.click("@z");
  this.click("@needsWork");
  this.waitForElementPresent("@needsWorkLetter");
  this.click("@needsWorkLetter");
  this.waitForElementPresent("@clear")
  this.click("@clear");
  this.waitForElementPresent("@z")
},

  waitForStimulus: function() {
    return this.waitForElementPresent("@stimulus", 3 * 60 * 1000);
  },
  waitForStimulusLetters: function() {
    return this.waitForElementPresent("@studentLetters", 3 * 60 * 1000);
  },
  waitForStimulusTiles: function() {
    return this.waitForElementPresent("@studentTiles", 3 * 60 * 1000);
  },
  waitForStimulusFreehand: function() {
    return this.waitForElementPresent("@studentFreehand", 3 * 60 * 1000);
  },
  waitForStimulusSilly: function() {
    return this.waitForElementPresent("@studentSilly", 3 * 60 * 1000);
  },
  waitForStimulusChant: function() {
    return this.waitForElementPresent("@studentChant", 3 * 60 * 1000);
  },
  waitForStimulusLevelled: function() {
    return this.waitForElementPresent("@studentLevelled", 3 * 60 * 1000);
  }
};

var generalCommands = {
  pause: function() {
    return this.pause(1000);
  }
};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var tileCommands = {
  dragTeacherTile: function() {
    this.api.moveToElement('//*[@id="applicationContainer"]/div[1]/div/div[2]/div/div[4]/div[1]/div[1]', 0, 0)
    this.api.mouseButtonDown(0)
    this.api.moveToElement('//*[@id="applicationContainer"]/div[1]/div/div[2]/div/div[3]', 300, 200)
    this.api.mouseButtonUp(0) // nothing happens
  },

  tileElementsVisible: function() {
    this.api.useXpath().click("//*[contains(text(), 'Tiles')]");
    this.waitForElementPresent("@showPanel", 1000);
    this.assert.visible("@showPanel");
    this.click("@showPanel");
    this.assert.visible("@invertedPanel");
  },

  tileDragStudent: function() {
    this.api.useXpath().click("//*[contains(text(), 'Tiles')]");
    this.waitForElementPresent("@showPanel", 1000);
    this.click("@showPanel");
    this.waitForElementPresent("@invertedPanel", 1000);
    this.api.pause(500);
    this.api.useXpath().moveToElement('//*[@id="applicationContainer"]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]', 0, 0)
    this.api.mouseButtonDown(0);
    this.api.useXpath().moveToElement('//*[@id="applicationContainer"]/div[1]/div/div[2]/div/div[2]', 5, 0);
    this.api.mouseButtonUp(0)
    this.api.useCss().assert.visible("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--inverted > div");
    this.api.assert.visible("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard > div");
  },

  tileBoardDraggableVisible: function() {
    this.api.useCss().assert.visible("#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard > div > div");
  },

}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var freehandCommands = {
  freehandElements: function(x) {
    x.useXpath().click("//*[contains(text(), 'Freehand')]");
    x.useCss();
    return this.waitForElementPresent("@backButton", 5000);
    return this.waitForElementPresent("@pallet", 5000);
    this.click("@showPanel");
    return this.waitForElementPresent("@hidePanel", 5000);
  }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var sillyCommands = {
  sillyElements: function(x) {
    x.useXpath().click("//*[contains(text(), 'Silly Sentences')]");
    x.useCss();
    return this.waitForElementPresent("@sillyBackButton", 5000);
    return this.waitForElementPresent("@sillyMainPanel", 5000);
    return this.waitForElementPresent("@sillyShowPanel", 5000);
    this.click("@sillyShowPanel");
    return this.waitForElementPresent("@sillyStudentContent", 5000);
  }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


var chantCommands = {
  chantElements: function(x) {
    x.useXpath().click("//*[contains(text(), 'Chant')]");
    x.useCss();
    return this.waitForElementPresent("@chantBackButton", 5000);
    return this.waitForElementPresent("@chantMainContent", 5000);
    return this.waitForElementPresent("@chantTimer", 5000);
    return this.waitForElementPresent("@chantSlow", 5000);
    return this.waitForElementPresent("@chantFast", 5000);
    return this.waitForElementPresent("@chantPlay", 5000);
  }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


module.exports = {
  sections: {
    general: {
      commands: [generalCommands],
      selector: "#loginContainer",
    },
    login: {
      commands: [loginCommands],
      selector: "#loginContainer",
      elements: {
        error: ".login__error",
        email: "#email-field",
        password: "#password-field",
        submit: "#submit",
        loadingIndicator: "#login-loading",
        popup: "#bigtext > span.bigtext-line0",
        forgotPassword: "#reset"
      }
    },
    conferences: {
      commands: [conferencesCommands],
      selector: "#conferenceManagementContainer",
      elements: {
        logout: "#applicationContainer > div > div > header > nav > ul > li:nth-child(2) > a",
        header: "#applicationContainer > div > div > header",
        startSession: "#conferenceManagementContainer > div.container__side.container__side--right > div > div:nth-child(1) > button",
        totalmanual: "#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(2) > div > div.panel__label",
        conly: "#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(4) > div > div.panel__label",
        gonly: "#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(5) > div > div.panel__label",
        totalauto: "#applicationContainer > div > div > div.panelGroup > div:nth-child(1) > div > div:nth-child(3) > div > div.panel__label",
        setting: "#conferenceManagementContainer > div:nth-child(1) > nav > ul > li:nth-child(3) > a > svg",
        autoMode: "#applicationContainer > div > div > div > div:nth-child(4) > div.panel__item.panel__item--header",
        studentSettings: "#applicationContainer > div > div > div.settingsNav > div > div:nth-child(3) > div",
        studentSettingsContent: "#applicationContainer > div > div > div.panelGroup > div > div.panel__item.panel__item--header",
        mainMenu: "#applicationContainer > div > div > div.breacrumbNav > div > a",
        autoRefresh: "div.container__action.auto-refresh-toggle > div > div > input[type='checkbox']"
      }
    },

    letters: {
      commands: [letterCommands],
      selector: "#applicationContainer",
      elements: {
        letterButton: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__left > div > div > a.button--text.js-buttonLetters",
        letterBoard: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard",
        draggable: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(2) > div > button > svg",
        letterBackButton: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(2) > div > button",
        boardDraggable: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard",
        hidePanel: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div > button > svg > use",
        showPanel: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div > button > svg > use",
        studentWhiteboard: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__bank.whiteboard__bank--inverted > div > div:nth-child(1)"
      }
    },

    tiles: {
      commands: [tileCommands],
      selector: ".container--reinforcement",
      elements: {
        showPanel: "[data-reinforcement-invert-button]",
        invertedPanel: "[data-whiteboard-bank='inverted']",
        magnet: "[data-whiteboard-bank='inverted'] > div:first-child > .magnet:first-child"
      }
    },
    teacherWorkspace: {
      commands: [teacherWorkspaceCommands],
      selector: "#teacherWorkspaceContainer",
      elements: {
        workspace: ".workspace",
        notesnewpanel:"#js-editNotes",
        savebutton:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div:nth-child(4) > div > div > div > div.orfFinish__saveButton > a",
        summarypanel:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div:nth-child(4) > div > div > div",
        stopbutton:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__left > div.stage__item-orfTimer > div > div > div.ORF__stop-timer.stop",
        bathclear:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__center > div.stage__stimulus.stage__stimulus--full.js-stageStimulus.st-unflipped > div > div:nth-child(1) > p > span:nth-child(1)",
        bathyellow:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__center > div.stage__stimulus.stage__stimulus--full.js-stageStimulus.st-unflipped > div > div:nth-child(1) > p > span.error",
        starttimer:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__left > div.stage__item-orfTimer > div > div > div.ORF__start-timer.start",
        levelg:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__left > div.stage__item-orfTimer > div > div > div:nth-child(9)",
        readingassessmentpanel:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__center > div.stage__stimulus.stage__stimulus--full.js-stageStimulus.st-unflipped > div > div:nth-child(2) > p:nth-child(2)",
        readinglevelg:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div:nth-child(5) > div > div > div > div.orfLevel__range > div > a:nth-child(7)",
        readingassessment:"#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(3) > span",
        catSelector:"#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__bank.whiteboard__bank--standard > div:nth-child(2) > div > div",
        goButton: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__bottom > div.stage__items.stage__items--right > div > div",
        goButtonStories: "#applicationContainer > div.story-overlay > div.story.container > div > div.story__reinforcement > div > div",
        search: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__bottom > div.stage__items.stage__items--right > div > input",
        searchStories: "#applicationContainer > div.story-overlay > div.story.container > div > div.story__reinforcement > div > input",
        tile: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div > div > div:nth-child(1)",
        leveledText: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(2) > span",
        story: ".js-stimuliTilesLeveledTexts > div",
        storyContent: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > img",
        storyBackButton: "#applicationContainer > div.js-overlay > div > div > button.button.button--close.js-storyButtonCloseStory > img",
        storyFlip: "#applicationContainer > div.js-overlay > div > div > button.story__flip.js-storyButtonFlip > a > svg",
        storyText: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > figcaption",
        storyForward: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > button.flickity-prev-next-button.next > svg > path",
        storyBack: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > button.flickity-prev-next-button.next > svg > path",
        stageStory: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(3) > span",
        stage: ".js-stimuliTilesStageStories > div:nth-child(1)",
        stage2: ".js-stimuliTilesStageStories > div:nth-child(2)",
        stageContent: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > img",
        stageBackButton: "#applicationContainer > div.js-overlay > div > div > button.button.button--close.js-storyButtonCloseStory > img",
        stageFlip: "#applicationContainer > div.js-overlay > div > div > button.story__flip.js-storyButtonFlip > a > svg",
        stageText: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > figcaption",
        stageForward: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > button.flickity-prev-next-button.next > svg > path",
        stageBack: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > button.flickity-prev-next-button.next > svg > path",
        onsets: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(2) > span",
        autoModes: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__center > div:nth-child(1) > div.nextbutton__container > div.nextButton__rightBlock",
        onsetContent: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__center > div.stage__stimulus.js-stageStimulus > div > div > div > div.stimulus-cell.is-selected",
        needsWork: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div > div > div:nth-child(1)",
        chantStimulus: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div:nth-child(2) > div > div:nth-child(2) > div.chant__button.chant__button--start > svg",
        goodSightWord: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div.grid-cell.stimuli-tiles.stimuli-tiles.stimuli-tiles--onsets.u-1of3 > div > div:nth-child(1) > a",
        mastered: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__right.js-menuAssessment > div > div.js-buttonMastered > a > span.icon.icon-circle.icon-mastered",
        learning: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__right.js-menuAssessment > div > div.js-buttonLearning > a > span.icon.icon-circle.icon-learning",
        goodSightInner: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div > div > div:nth-child(14) > a",
        onsetStimulus: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div.stimuli-tiles.stimuli-tiles--rimes.grid-cell.u-2of3 > div > div:nth-child(1) > a",
        readingStageUp: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a > div.menu__number > svg.menu__icon.js-readingStageUp",
        readingStageDown: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a > div.menu__number > svg.menu__icon.js-readingStageDown",
        letterNames: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(1) > span",
        sightWords: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(1) > span",
        affixs: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(3) > span",
        autoNextButton: "div.nextbutton__container",
        selectedLetterSoundTile: ".tile__title.st-selected",
        masterlist: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(2) > span",
        advancement: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(6) > span",
        stagestoriestab: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(3) > span",
        notyet: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div:nth-child(2) > div > div > div > div.readingStageAdvancement__go-back > a",
        endsessionbutton:"#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__bottom > div.stage__items.stage__items--center > div:nth-child(2) > div > a > svg",
        rla: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > div > h3 > div.ORF-begin__button",
        fivechanged: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > div > div > div:nth-child(1) > div.reading-stage-setup__current > a",
        four: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > div > h3 > div.reading-stage__options > a:nth-child(5)",
        learningassessment: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__right > div:nth-child(2) > div > div:nth-child(3)",
        rlapopup:"#teacherWorkspaceContainer > div > div.js-matrix > div > div > section",
        assessmentelement: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div.stimuli-tiles.stimuli-tiles--rimes.grid-cell.u-2of3 > div > div:nth-child(1) > a",
        descriptors:"#ra-help-popup > div > div.content",
        helpbutton: "a.ra-help__button",
        notes: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(6) > span",
        readingFoundation: "#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(1) > span",
        mlonset: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div.word-bank_nav-item.active",
        l: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > div > h3 > div.reading-level__options > a:nth-child(13)",
        five: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > div > h3 > div.reading-stage__options > a:nth-child(6)",
        mlsight: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div:nth-child(2)",
        mlaffix: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div:nth-child(3)",
        notesnew:"#teacherWorkspaceContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(7) > span",
        masterlistsearch: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div.search-bar__msw-list > input",
        masterlistsearchgo:"#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__nav > div.search-bar__msw-list > i:nth-child(1)",
        flippedcontent:"#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.masterList__stimulus-display > div",
        zbutton: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__word-bank-container > div:nth-child(3) > div.master-list__word-block > div > div:nth-child(1) > div",
        flipbutton: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div > a > svg",
        bbutton: "#teacherWorkspaceContainer > div > div.js-matrix > div > div > section > div > div > div:nth-child(1) > a",
        basketball: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__center > div.stage__stimulus.stage__stimulus--full.js-stageStimulus.st-unflipped > div > div > img",
        sliderchecked: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__left > div:nth-child(3) > div > div > div",
        sliderunchecked: "#teacherWorkspaceContainer > div > div.stage.stage--workspace.js-stage > div.stage__top > div.stage__left > div:nth-child(3) > div > div > div"
      }
    },
    studentWorkspace: {
      commands: [studentWorkspaceCommands],
      selector: "#applicationContainer",
      elements: {
        clear: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div.stage__top.stage__item.u-text-center > div > div > div:nth-child(4)",
        needsWorkLetter: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__word-bank-container > div:nth-child(3) > div.master-list__word-block > div > div:nth-child(1) > div",
        needsWork: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div.stage__top.stage__item.u-text-center > div > div > div:nth-child(2) > a > span.icon.icon-circle.icon-learning",
        z: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.word-bank__background > div.word-bank__word-bank-container > div:nth-child(3) > div.master-list__word-block > div > div:nth-child(1) > div",
        workspace: "#studentWorkspaceContainer > div > div",
        stimulus: "#studentWorkspaceContainer > div > div > div > div > div",
        studentLetters: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__bank.whiteboard__bank--standard",
        studentTiles: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.whiteboard__item.whiteboard__bank.whiteboard__bank--standard",
        studentFreehand: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.stage__stimulus.stage__stimulus--full.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard.canvasContainer > div > ul",
        studentSilly: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.stage__stimulus.stage__stimulus--full.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard.flex--alignItems--center > div",
        studentChant: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.flickity-enabled.is-draggable > div > div > div.chant__word.is-selected",
        StudentLevelled: "#applicationContainer > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled > div > div > div.story__page.is-selected > figure"
      }
    },
    freehandWorkspace: {
      commands: [freehandCommands],
      selector: "#applicationContainer",
      elements: {
        backButton: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(2) > div > button > svg",
        showPanel: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div > button > svg",
        hidePanel: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div > button > svg",
        pallet: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.stage__stimulus.stage__stimulus--full.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard.canvasContainer > div > ul",
      }
    },
    silly: {
      commands: [sillyCommands],
      selector: "#applicationContainer",
      elements: {
        sillyBackButton: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(2) > div > button",
        sillyMainContent: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.stage__stimulus.stage__stimulus--full.whiteboard__item.whiteboard__canvas.whiteboard__canvas--standard.flex--alignItems--center > div",
        sillyShowPanel: "#applicationContainer > div.js-overlay > div > div.stage__right.flex--direction--column > div:nth-child(2) > div > button > svg",
        sillyTimer: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(1) > div > div > div.js-sessionTimer > div > div > span:nth-child(1)",
        sillyStudentContent: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div.stage__stimulus.stage__stimulus--full.whiteboard__item.whiteboard__canvas.whiteboard__canvas--inverted.flex--alignItems--center.is--rotated > div"
      }
    },
    chant: {
      commands: [chantCommands],
      selector: "#applicationContainer",
      elements: {
        chantBackButton: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(2) > div > button > svg",
        chantMainContent: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div.flickity-enabled.is-draggable > div > div > div.chant__word.is-selected",
        chantTimer: "#applicationContainer > div.js-overlay > div > div.stage__left.flex--justifyContent--flexEnd > div:nth-child(1) > div > div > div.js-sessionTimer > div > div",
        chantSlow: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div:nth-child(2) > div > div:nth-child(1) > div.chant__button.chant__button--start > svg",
        chantFast: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div:nth-child(2) > div > div:nth-child(3) > div.chant__button.chant__button--start > svg",
        chantPlay: "#applicationContainer > div.js-overlay > div > div.stage__center > div > div > div:nth-child(2) > div > div:nth-child(2) > div.chant__button.chant__button--start > svg"
      }
    }
  }
};
