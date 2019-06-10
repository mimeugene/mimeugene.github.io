var conf = require('../../nightwatch.conf.js');
var locator = require("./locators.js");


module.exports = {

    'Should navigate to my Portfolio': function (browser) {
      browser
      .url('http://localhost:4000/studentportal')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      browser.click(locator.logInWithCurrentDate)
      .expect.element(locator.letsWriteSomeStories).to.be.present.before(5000)
      browser.pause(1000)
      browser.click(locator.letsWriteSomeStories)
      .expect.element(locator.addStory).to.be.present.before(5000)
    },

  'should follow tutorial instructions': function (browser) {
    browser
    browser.click(locator.initiate1)
    browser.pause(1000)
    .expect.element(locator.initiate2).to.be.present.before(3000)
    browser.moveToElement(locator.initiate2, 2, 2, function() {
        browser.click(locator.initiate2)
      })
    browser.pause(1000)
    browser.click(locator.initiate2)
    .expect.element(locator.initiate3).to.be.present.before(3000)
    browser.click(locator.initiate3)
    browser.pause(1000)
    .expect.element(locator.initiate5).to.be.present.before(3000)
    browser.click(locator.initiate5)
    browser.pause(1000)
    .expect.element(locator.initiate6).to.be.present.before(3000)
    browser.click(locator.initiate6)
    browser.pause(1000)
    .expect.element(locator.initiate7).to.be.present.before(3000)
    browser.click(locator.initiate7)
    browser.pause(1000)
    .setValue(locator.initiate7, "cheeseburger")
    .expect.element(locator.initiate8).to.be.present.before(3000)
    browser.click(locator.initiate8)
    browser.pause(1000)
    .expect.element(locator.initiate9).to.be.present.before(3000)
    browser.click(locator.initiate9)
    browser.pause(1000)
    .expect.element(locator.initiate10).to.be.present.before(3000)
    browser.click(locator.initiate10)
    browser.pause(1000)
    .expect.element(locator.myPortfolioNew).to.be.present.before(3000)
    browser.click(locator.myPortfolioNew)
    .expect.element(locator.letsWriteSomeStories).to.be.present.before(3000)
    browser.pause(2000)
    browser.click(locator.letsWriteSomeStories)
  },


  'should be able to create story and retain title': function (browser) {
    browser
    browser.click(locator.addStory)
    browser.pause(1000)
    .expect.element(locator.storyByYourself).to.be.present.before(5000)
    browser.click(locator.storyByYourself)
    browser.click(locator.storyTitleField)
    .setValue(locator.storyTitleField, "nightwatch")
    browser.pause(1000)
    browser.click(locator.createMyStory)
    .expect.element(locator.myPortfolio).to.be.present.before(5000)
  },

  'should be able to go home when home button is pressed': function (browser) {
    browser
    browser.click(locator.myPortfolio)
    .expect.element(locator.letsWriteSomeStories).to.be.present.before(30000)
    browser.pause(2000)
    browser.click(locator.letsWriteSomeStories)
    .expect.element(locator.addStory).to.be.present.before(5000)
  },

  'should be able to make a simple story': function (browser) {
    browser
    browser.assert.containsText('body', 'nightwatch')
  },

  'dog assistant should work ': function (browser) {
    browser
    .expect.element(locator.selectATopic).to.be.present.before(30000)
    browser.click(locator.selectATopic)
    browser.click(locator.addAStory)
    browser.assert.containsText('body', 'Click the plus to start adding a story.')
    browser.click(locator.dogCancel)
    browser.click(locator.selectATopic)
    browser.click(locator.searchForAStory)
    browser.assert.containsText('body', 'Type what you want to search for.')
  },

  'should be able to make a progressive story': function (browser) {
    browser
    browser.click(locator.addStory)
    .expect.element(locator.storyByYourself).to.be.present.before(5000)
    browser.click(locator.storyTitleField)
    .setValue(locator.storyTitleField, "takeTurns!!")
    .expect.element(locator.initiate2).to.be.present.before(3000)
    browser.moveToElement(locator.initiate2, 2, 2, function() {
        browser.click(locator.initiate2)
      })
    browser.pause(1000)

    browser.click(locator.initiate2)
    .expect.element(locator.initiate3).to.be.present.before(3000)
    browser.click(locator.initiate3)
    browser.pause(1000)
    .expect.element(locator.myPortfolioTurns).to.be.present.before(5000)
  },

  'sending a story to tutor should disable all other features': function (browser) {
    browser
    .expect.element(locator.addImageClickable).to.be.present.before(5000)
    browser.click(locator.myPortfolioTurns)
    browser.pause(2000)
    browser.click(locator.letsWriteSomeStories)
    .expect.element(locator.addStory).to.be.present.before(5000)
  },

  'add story button should work the same way create a story works': function (browser) {
    browser
    browser.click(locator.addStory)
    .expect.element(locator.storyByYourself).to.be.present.before(5000)
    browser.click(locator.storyTitleField)
    .setValue(locator.storyTitleField, "addStoryTest")

    .expect.element(locator.initiate2).to.be.present.before(3000)
    browser.moveToElement(locator.initiate2, 2, 2, function() {
        browser.click(locator.initiate2)
      })
    browser.pause(1000)

    browser.click(locator.initiate2)
    .expect.element(locator.initiate3).to.be.present.before(3000)
    browser.click(locator.initiate3)
    browser.pause(1000)

    .expect.element(locator.myPortfolioTurns).to.be.present.before(5000)
    browser.click(locator.myPortfolioTurns)
    browser.pause(2000)
    browser.click(locator.letsWriteSomeStories)
    .expect.element(locator.addStory).to.be.present.before(5000)
  },

  'cancel button should bring you back to the home page': function (browser) {
    browser
    browser.click(locator.addStory)
    .expect.element(locator.storyByYourself).to.be.present.before(5000)
    browser.click(locator.cancelButton)
    browser.pause(2000)
    .expect.element(locator.addStory).to.be.present.before(5000)
  },


  'start presentation button should hide all other content': function (browser) {
    browser
    browser.click(locator.nightwatch)
    .expect.element(locator.myPortfolio).to.be.present.before(100000)
    browser.click(locator.startPresentation)
    .expect.element(locator.myPortfolio).to.not.be.present.before(5000)
    browser.click(locator.xButton)
    .expect.element(locator.myPortfolio).to.be.present.before(5000)
  },


  'comments should open comments tab': function (browser) {
    browser
    browser.click(locator.comments)
    .expect.element(locator.addCommentTab).to.be.present.before(5000)
  },

  'adding comments should work': function (browser) {
    browser
    browser.click(locator.addCommentTab)
    .setValue(locator.addCommentTab, "testComment")
    browser.click(locator.submitComment)
    browser.assert.containsText('body', 'testComment')
  },

  // 'removing comments should work': function (browser) {
  //   browser
  //   browser.click(locator.addCommentTab)
  //   .setValue(locator.addCommentTab, "testComment")
  //   browser.click(locator.submitComment)
  //   browser.assert.containsText('body', 'testComment')
  // },

  'pages should open pages tab': function (browser) {
    browser
    .expect.element(locator.pages).to.be.present.before(5000)
    browser.click(locator.pages)
    .expect.element(locator.pagesSidebar).to.be.present.before(5000)
  },

  'adding a page should add a new page': function (browser) {
    browser
    // browser.click(locator.addPages)
  },

  'alternate adding a page should add a new page': function (browser) {
    browser
    .expect.element(locator.alternateAddPage).to.be.present.before(5000)
    browser.click(locator.alternateAddPage)
    browser.click(locator.alternateAddPage)
    browser.assert.containsText('body', 'Page 3 / 3')
  },

  'page back/forward buttons should change pages': function (browser) {
    browser
    browser.pause(1000)
    .expect.element(locator.pageBackButton).to.be.present.before(5000)
    browser.click(locator.pageBackButton)
    browser.pause(1000)
    browser.assert.containsText('body', 'Page 2 / 3')
    .expect.element(locator.pageBackButton).to.be.present.before(5000)
    browser.click(locator.pageBackButton)
    browser.pause(1000)
    browser.assert.containsText('body', 'Page 1 / 3')
    .expect.element(locator.pageForwardButton).to.be.present.before(5000)
    browser.click(locator.pageForwardButton)
    browser.pause(1000)
    browser.assert.containsText('body', 'Page 2 / 3')
    .expect.element(locator.pageForwardButton).to.be.present.before(5000)
    browser.click(locator.pageForwardButton)
    browser.pause(1000)
    browser.assert.containsText('body', 'Page 3 / 3')
  },

  'page all the way forward buttons should bring the pages all the way to the front': function (browser) {
    browser
    .expect.element(locator.pageBackButton).to.be.present.before(5000)
    browser.click(locator.pageBackButton)
    browser.pause(1000)
    .expect.element(locator.pageBackButton).to.be.present.before(5000)
    browser.click(locator.pageBackButton)
    browser.pause(1000)
    browser.assert.containsText('body', 'Page 1 / 3')
    browser.click(locator.lastPageButton)
    browser.pause(1000)
    browser.assert.containsText('body', 'Page 3 / 3')
  },

    'layout elements should change layout on page': function (browser) {
      browser
      .expect.element(locator.pages).to.be.present.before(5000)
      browser.click(locator.pages)
      .expect.element('#pageCanvasImage').to.be.present.before(5000)
    },


  'audio should open audio tab': function (browser) {
    browser
    .expect.element(locator.audio).to.be.present.before(5000)
    browser.click(locator.audio)
    .expect.element(locator.audioBar).to.be.present.before(5000)
  },

  'edit image button should open proper panels': function (browser) {
    browser
    .expect.element(locator.editImage).to.be.present.before(5000)
    browser.click(locator.editImage)
    .expect.element(locator.editImagePanel).to.be.present.before(5000)
  },

  'edit drawing button should open proper panels': function (browser) {
    browser
    .expect.element(locator.editDrawing).to.be.present.before(5000)
    browser.click(locator.editDrawing)
    .expect.element(locator.editDrawingPanel).to.be.present.before(5000)
  },

  'finish story should work': function (browser) {
    browser
    .expect.element(locator.finishStory).to.be.present.before(5000)
    browser.click(locator.finishStory)
    browser.click(locator.myPortfolio)
    browser.pause(2000)
    .expect.element(locator.storyFinished).to.be.present.before(5000)
  },

  'search feature searches': function (browser) {
    browser
    browser.click(locator.letsWriteSomeStories)
    .expect.element(locator.addStory).to.be.present.before(5000)
    browser.click(locator.searchBar)
    .setValue(locator.searchBar, "nightwatch")
    browser.click(locator.searchEnter)
    browser.assert.containsText('body', 'nightwatch')
    // browser.assert.containsText('body', 'takeTurn!!')
    browser.expect.element('body').text.to.not.equal('takeTurns!!');
  },

  'search feature buttons filter properly': function (browser) {
    browser
    .expect.element(locator.addStory).to.be.present.before(5000)
    browser.click(locator.clearBar)
    browser.click(locator.searchHambuger)
    .expect.element(locator.completedStories).to.be.present.before(5000)
    browser.click(locator.completedStories)
    // browser.pause(2000)
    browser.assert.containsText('body', 'Showing completed stories')
    browser.click(locator.incompleteStories)
    browser.assert.containsText('body', 'Showing incomplete stories')
    browser.click(locator.myTurn)
    browser.assert.containsText('body', 'Showing my turn incomplete stories')
    browser.click(locator.notMyTurn)
    browser.assert.containsText('body', 'Showing not my turn incomplete stories')
    browser.click(locator.clearFilters);
    browser.pause(1000)
  },

  'Resize image works properly': function (browser) {
    browser
      browser.click(locator.nightwatch)
      .expect.element(locator.myPortfolio).to.be.present.before(100000)
      browser.pause(1000)
      .expect.element(locator.initiate5).to.be.present.before(3000)
      browser.click(locator.initiate5)
      browser.pause(1000)
      .expect.element(locator.initiate6).to.be.present.before(3000)
      browser.click(locator.initiate6)
      browser.pause(1000)
      .expect.element(locator.initiate7).to.be.present.before(3000)
      browser.click(locator.initiate7)
      browser.pause(1000)
      .setValue(locator.initiate7, "cheeseburger")
      .expect.element(locator.initiate8).to.be.present.before(3000)
      browser.click(locator.initiate8)
      browser.pause(1000)
      .expect.element(locator.initiate9).to.be.present.before(3000)
      browser.click(locator.initiate9)
      browser.pause(1000)
      // WebElement slider = driver.findElement(By.xpath("//*[@id="edit-image-nav"]/div[1]/div/input"));
      // //Using Action Class
      // Actions move = new Actions(driver);
      // Action action = move.dragAndDropBy(slider, 30, 0).build();
      // action.perform();
      // .executeScript("document.getElementById('drawingApp').setAttribute('scale', '1.5')");
      // <div id="pageCanvasImage" class="canvas__image is-editImage  has-image"><div class="canvas__image__drawing using-marker" id="drawing"><div id="drawingAppContainer"><canvas width="650" height="248" id="drawingApp"></canvas></div></div><div id="pageCanvasPhoto" class="canvas__image__photo "><div class="photo--editable" style="transform: translate(0px, 0px) rotate(0deg) scale(1.39); width: 530px; height: 397.5px;"><img src="https://ifl-cresta.s3.amazonaws.com/images/1/1535634541705.png" alt="" style="visibility: visible;"></div></div></div>
  },

  /*
  JavascriptExecutor js = (JavascriptExecutor) driver;
  js.executeScript("document.getElementById('//id of element').setAttribute('attr', '10')");
  */

};
