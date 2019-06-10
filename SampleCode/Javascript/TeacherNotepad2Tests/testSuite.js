// describe.skip("Test Suite", function() {

describe("Test Suite", function() {
  var browser;

  before(function(client, done) {
    done();
  });

  after(function(client, done) {
    client.end(function() {
      done();
    });
  });

  afterEach(function(client, done) {
    done();
  });


  beforeEach(function(client, done) {
    browser = client;
    teacherPortal = client.page.teacherPortal();
    login = teacherPortal.section.login;
    conferences = teacherPortal.section.conferences;
    teacherWorkspace = teacherPortal.section.teacherWorkspace;
    studentWorkspace = teacherPortal.section.studentWorkspace;
    general = teacherPortal.generalCommands;
    letters = teacherPortal.section.letters;
    tiles = teacherPortal.section.tiles;
    freehand = teacherPortal.section.freehandWorkspace;
    silly = teacherPortal.section.silly;
    chant = teacherPortal.section.chant;
    client.clearLocalStorage();
    //client.init();
    browser
      .url('http://localhost:3333/')
    done();

  });

  // describe.skip("next button", function() {
  //   it("should select a stimulus when clicked", function(client) {
  //     login.loginSuccessfully();
  //     conferences.waitForPageDisplayed();
  //     conferences.startSession();
  //
  //     teacherWorkspace.waitForPageDisplayed();
  //     teacherWorkspace.selectReadingStage(2);
  //     teacherWorkspace.click("@autoNextButton");
  //     browser.pause(100);
  //     teacherWorkspace.expect.element("@selectedLetterSoundTile").to.be.present;
  //   });
  // });

  // describe("Login", function() {
  //
  //   it("should have all of the right elements visible at log in screen @testr", function() {
  //     login.expect.element("@error").to.not.be.visible;
  //     login.expect.element("@email").to.be.visible;
  //     login.expect.element("@password").to.be.visible;
  //     login.expect.element("@submit").to.be.visible;
  //   });
  //
  //   it("fails login", function() {
  //       login.loginFailure()
  //     }
  //   );
  //   // it("logs in successfully", function() {
  //   //     login.loginSuccessfully();
  //   //   }
  //   // );
  // });

  describe("Conferences", function() {

    it("should display settings", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.settings();
      conferences.waitForSettingsDisplayed();
      }
    );
    //
    // describe.skip("Auto-Refresh", function() {
    //   it("should should be present", function (){
    //     login.loginSuccessfully();
    //     conferences.waitForPageDisplayed();
    //     conferences.expect.element("@autoRefresh").to.be.present;
    //   });

      it.skip("should default to true", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.expect.element("@autoRefresh").to.be.selected;
      });
    });

    // it("should switch to student portal settings and show proper content", function () {
    //         conferences.settings();
    //         conferences.studentPortal();
    //     }
    // );
  // });

  //
  //  it("should logout when clicked", function () {
  //      login.loginSuccessfully();
  //      conferences.waitForPageDisplayed();
  //      conferences.loginWait();
  //      login.expect.element("@error").to.not.be.visible;
  //      login.expect.element("@email").to.be.visible;
  //      login.expect.element("@password").to.be.visible;
  //      login.expect.element("@submit").to.be.visible;
  //    }
  // )

  describe("Conferences", function() {

    it("enters teacher workspace", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.startSession();
        teacherWorkspace.waitForPageDisplayed();
        teacherWorkspace.selectStimulus();
      }
    )
  });

  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  describe("Reinforcements", function() {

    describe("Letters", function() {

      // it.skip("letter appears when you drag it", function() {
      //     login.loginSuccessfully();
      //     conferences.waitForPageDisplayed();
      //     conferences.startSession();
      //
      //     teacherWorkspace.waitForPageDisplayed();
      //     teacherWorkspace.selectReadingStage(3);
      //     teacherWorkspace.selectStimulus();
      //
      //     browser.useXpath().click("//*[contains(text(), 'Letters')]");
      //     letters.dragTeacher(browser);
      //     letters.boardDraggableVisible(browser);
      //   }
      // );

      it("letters all the correct elements visible, and student side letter appears when you drag it", function() {
          login.loginSuccessfully();
          conferences.waitForPageDisplayed();
          conferences.startSession();

          teacherWorkspace.waitForPageDisplayed();
          teacherWorkspace.selectReadingStage(3);
          teacherWorkspace.selectStimulus();

          letters.elementsVisible(browser);
          letters.dragStudent(browser);
        }
      )
    });

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    describe("Tiles", function() {

      // it.skip("Tiles appears when you drag it", function() {
      //     login.loginSuccessfully();
      //     conferences.waitForPageDisplayed();
      //     conferences.startSession();
      //
      //     teacherWorkspace.waitForPageDisplayed();
      //     teacherWorkspace.selectReadingStage(3);
      //     teacherWorkspace.selectStimulus();
      //
      //     browser.useXpath().click("//*[contains(text(), 'Tiles')]");
      //     tiles.dragTeacherTile();
      //     tiles.tileBoardDraggableVisible()
      //   }
      // );

      it("Tiles have all the correct elements visible, and student side tiles appears when you drag it", function() {
          login.loginSuccessfully();
          conferences.waitForPageDisplayed();
          conferences.startSession();

          teacherWorkspace.waitForPageDisplayed();
          teacherWorkspace.selectReadingStage(3);
          teacherWorkspace.selectStimulus();

          tiles.tileElementsVisible();
          // tiles.tileDragStudent();
        }
      );

    });
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    describe("Freehand", function() {

      it("all freehand elements present", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.startSession();

        teacherWorkspace.waitForPageDisplayed();
        teacherWorkspace.selectReadingStage(3);
        teacherWorkspace.selectStimulus();

        freehand.freehandElements(browser);
      });
    });
    //         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
    describe("Silly Sentences", function() {

      it("all silly sentences elements are visible", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.startSession();

        teacherWorkspace.waitForPageDisplayed();
        teacherWorkspace.selectReadingStage(3);
        teacherWorkspace.selectStimulus();

        silly.sillyElements(browser);
      })

    });

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\

    describe("Chant", function() {

      it("all chant elements are visible", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.startSession();
        teacherWorkspace.waitForPageDisplayed();
        teacherWorkspace.selectReadingStage(3);
        teacherWorkspace.selectStimulus();
        chant.chantElements(browser);
      })

    });

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\

    describe("Leveled Text", function() {

      it("Leveled text displays images and content", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.startSession();

        teacherWorkspace.waitForPageDisplayed();
        teacherWorkspace.selectReadingStage(3);
        teacherWorkspace.selectLeveledText();
        teacherWorkspace.selectStory();
        teacherWorkspace.assertStoryElements();
      })

    });

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    describe("Stage Stories", function() {

      it("Stage Stories displays proper images and content", function() {
        login.loginSuccessfully();
        conferences.waitForPageDisplayed();
        conferences.startSession();

        teacherWorkspace.waitForPageDisplayed();
        teacherWorkspace.selectReadingStage(5);
        teacherWorkspace.selectStageStory();
        teacherWorkspace.selectStageStoryContent();
        teacherWorkspace.assertStageElements();
      });
    });
    // describe.skip("Automate", function() {
    //   it("Automate should move on to the next word", function() {
    //     login.loginSuccessfully();
    //     conferences.waitForPageDisplayed();
    //     conferences.startSession();
    //
    //     teacherWorkspace.waitForPageDisplayed();
    //     teacherWorkspace.selectReadingStage(3);
    //     teacherWorkspace.autoMode();
    //   })
    // });
  });

  describe("Teacher Workspace", function() {

    it("Sight words Should change when clicked on needs work, learning, and mastered", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();
      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(5);
      teacherWorkspace.mastered();
    })

    it("Onsets Should change when clicked on needs work, learning, and mastered", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();

      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(5);
      teacherWorkspace.onsetMastered();
    })

    it("should have proper content as reading stages change", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();

      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(1);
      teacherWorkspace.readingStageChange();
    })

  })

  describe("newTests", function() {

    it("New features displayed in Teacher Workspace", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();
      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(4);
      teacherWorkspace.waitForFeaturesDisplayed();
      });

    it("starts at reading foundation", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();
      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(4);
      teacherWorkspace.foundationActive();
      });

    it("master list proper elements visible", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();
      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(4);
      //studentWorkspace.masterlistElements();
      });

    it("does not open assessment", function() {
      login.loginSuccessfully();
      conferences.waitForPageDisplayed();
      conferences.startSession();
      teacherWorkspace.waitForPageDisplayed();
      teacherWorkspace.selectReadingStage(4);
      teacherWorkspace.masterlistElements();
      studentWorkspace.doesNotOpen();
  });
  it("advancement has elements", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.advancement();
  });

  it("has descriptors", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.descriptors();
  });

  it("changes rs", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.changesrs();
  });

  it("rla works", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.rlafunction();
  });

  it("brings up notes at end session", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.endsession();
  });

  it("conference settings exists", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.settings();
    conferences.assertsetting();
  });

  it("assessment tiles", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.assessmenttiles();
  });

  it("reading foundation does not go past 5", function () {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.rf6();
  });

  it("simple input box works with correct onset", function(){
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.sibworks();
  });

  it("simple input box works with incorrect onset", function(){
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(4);
    teacherWorkspace.sibworksincorrect();
  });
});

describe("Newest tests", function() {

  it("search works", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.inputSearchParameter();
  });

  it("search in stories works", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(3);
    teacherWorkspace.selectLeveledText();
    teacherWorkspace.selectStory();
    teacherWorkspace.inputSearchParameterStory();
    teacherWorkspace.inputSearchParameter();
  });

  it("search in master list works", function() {
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(6);
    teacherWorkspace.masterListSearch();
  });

  it("flip function works properly", function(){
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(5);
    teacherWorkspace.flipWorks();
  });

  it("picture switch works", function(){
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.selectReadingStage(2);
    teacherWorkspace.picSwitchWorks();
  });

  it("notes should open notes", function(){
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.newNotes();
  });

  it("reading assessment works", function(){
    login.loginSuccessfully();
    conferences.waitForPageDisplayed();
    conferences.startSession();
    teacherWorkspace.waitForPageDisplayed();
    teacherWorkspace.readingAssessment();
  });

});

});
