Test Reference
===================

###Tests that are coded and exist in the framework.
_____________________
**should navigate to My Portfolio**
```cucumber
Feature: Staging entry point
App should reach My Portfolio after correct navigation buttons are pressed.

Scenario: Navigate to home page
Given I have the staging environment running
And the URL is "http://localhost:4000/studentportal"
When I click "Log in with current date"
Then I should see a link that states "Let's write some stories"
When I click "Let's write some stories"
Then I should be on the "My portfolio" page
And I should see the "Create a story" link.
```


_____________________
**should be able to create a story and retain title**
```cucumber
Feature: Story creation

Scenario: Create a simple story
Given I am logged in and on the "My portfolio" page
When I click "Create a story"
And I enter a title
And I click "Create my story"
Then I should arrive on a the create a story page and see my title up top
```

**should be able to go home when home button is pressed**
```cucumber
Feature: Home Button

Scenario: home button takes you back to portal
Given I am logged in and am in the Create a story page.
When I click on the house (home button)
Then I should return to the "My portfolio" page
```

**should be able to make a simple story**

```cucumber
Feature: simple story

Scenario: make simple story
Given I am logged in and am in the "My portfolio" page
Then I should, at this point see a simple story that I made earlier, in the list of stories.
```

**should be able to make a progressive story**

```cucumber
Feature: progressive story.
Scenario: Create a progressive story
Given I am logged in and on the "My portfolio" page
When I click "Take Turns Story"
And I enter a title
And I click "Create my story"
Then I should arrive on a the create a story page and see my title up top
And when I click on the house (home button)
And I should, at this point see a progressive story that I made earlier, in the list of stories.
```

**add story button should work the same way create a story works**

```cucumber
Feature: add story button

Scenario: make simple story
Given I am logged in and am in the "My portfolio" page
Then when I click "add story"
And follow the same flow as "create a story"
Then it should create a story without issues.
```

**cancel button should bring you back to the home page**

```cucumber
Feature: cancel button

Scenario: make simple story
Given I am logged in and am in the "My portfolio" page
Then when I click "add story"
And I click cancel
Then it should bring me back to the home page.
```

**start presentation button should hide all other content**

```cucumber
Feature: presentation button

Scenario: make simple story
Given I am logged in and am in the "create story" page
And when I click "Start presentation"
Then everything should disappear from the page
And the Cancel button should appear.
And if I click the cancel button
Then the content and external buttons should reappear
```

**comments should open comments tab**

```cucumber
Feature: comments button

Scenario: comment opens tab
Given I am on the nightwatch story mage
And when I click on the comments button
Then the comments overlay should pop up
```

**pages should open pages tab**

```cucumber
Feature: pages button

Scenario: pages opens tab
Given I am on the nightwatch story mage
And when I click on the pages button
Then the pages overlay should pop up
```

**search feature searches**

```cucumber
Feature: search

Scenario: search button
Given I am on the portfolio page
When I click on the search button
And I search for "nightwatch"
Then "nightwatch" should be present
And other stories should not be present
```


**search feature buttons filter properly**

```cucumber
Feature: search buttons

Scenario: search buttons
Given I am on the portfolio page
When I click on the search module hamburger menu on right side
And I click on "completed stories"
Then "Showing completed stories" should show up on the page.
And when I click on the rest of the buttons
Then the corresponding text should appear on the page
```

**page layout button should open page layout tab**

```cucumber
Feature: Page Layout

Given I am on sample story page
When I click on page layout button on the left side
Then the side module should extend and show all options
```

**audio button should open audio tab**

```cucumber
Feature: Audio layout

Given I am on sample story page
When I click on audio button on the left side
Then the side module should extend and show all options
```

**Sending a story to tutor should disable all other features**

```cucumber
Feature: sending feature

Given I am on a take turns page
When I click on the send button on the left side
Then all of the other features should turn non clickable
```

**Layout elements should change layout on page**

```cucumber
Feature: layout

Given I am on nightwatch story page
When I click on the layout elements on the left side
Then all the layout should change in the story
```

**adding a page should add a new page**

```cucumber
Feature: add pages

Given I am on nightwatch story page
When I click on add pages
Then the sidebar should appear
And when I click add page and "add"
Then a page should be added
And the body should contain "Page 2 / 2"
```

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXX  TO BE CODED   XXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

**edit image button should open proper panels**

```cucumber
Feature: layout

Given I am on nightwatch story page
When I click on the edit image button on the top of the page
Then all of the edit image content should appear
```

**edit drawing button should open proper panels**

```cucumber
Feature: layout

Given I am on nightwatch story page
When I click on the edit drawing button on the top of the page
Then all of the edit drawing content should appear
```
**finish story should work**

```cucumber
Feature: layout

Given I am on nightwatch story page
When I click on the finish story button
Then when I return home, the nightwatch page should have a checkmark next to it.
```
**add image should work**

```cucumber
Feature: layout

Given I am on nightwatch story page
When I click on the add image / add clipart button
Then the page should contain an image.
```

**should follow tutorial instructions**
```cucumber
Feature: tutorial

Given I am first logged in, and cookies are clear
I should be able to navigate through the tutorial content
```

**should open FGT homepage**
```cucumber
Feature: Family's Got Talent

Scenario: Logged into app
Given I am at the game selection page
When I click on the FGT game
And click 'tap to start'
Then I should be directed to the FGT homepage
```
