require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Leveled texts', :js => true do
    it 'has proper elements' do
        visit "http://localhost:3333/"
        x = 8
#wait till elements load
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")
#initiates random row selection
        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")
#selects random session
        within(allRow[random]) {find(".js-startSession").click}
#carefully changes reading level
        sleep 1
        find(:css, '.js-editStudentButton').click
        sleep 2
        find('#js-editReadingStage').click
        sleep 1
        find("#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > div > a:nth-child(#{x})").click
        sleep 1
        page.should have_css ".reading-stage__choice.grid-cell.st-selected", :text => x
        find(:css, '.button.grid-cell.button--close-student-edit.js-exitEditStudent').click
        sleep 2
        find('#applicationContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(3) > span').click

#select first instance, assert elements
        first('div.tile.grid-cell.u-text-center').click
        find('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > section > button').click
        page.should have_css('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > section > div > div > div > a')
        page.should have_css('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonMastered > button > span.icon.icon-circle.icon-mastered')
        page.should have_css('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonLearning > button > span.icon.icon-circle.icon-learning')
        page.should have_css('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonNeedsWork > button > span.icon.icon-circle.icon-needs-work')
        page.should have_css('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonClear > button')
#assessment tiles work on element
        sleep 2
        first('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > section > div > div > div').click
        find('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonMastered > button > span.icon.icon-circle.icon-mastered').click
        page.should have_css('a.tile__title.st-mastered.st-selected')
        find('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonLearning > button > span.icon.icon-circle.icon-learning').click
        page.should have_css('a.tile__title.st-learning.st-selected')
        find('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonNeedsWork > button > span.icon.icon-circle.icon-needs-work').click
        page.should have_css('a.tile__title.st-needs_work.st-selected')
        find('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > nav > div.grid-cell.js-buttonClear > button').click
        page.should have_css('a.tile__title.st-clear.st-selected')

#close / assess closed
        find('#applicationContainer > div > div.js-overlay > div > div > div.js-readingStrategies > div > section > button').click
        sleep 1
        page.should have_content("show reading strategies")
    end
end
