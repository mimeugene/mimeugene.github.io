require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Onsets', :js => true do
    it 'correct content for reading level 2 letter names' do
        visit "http://localhost:3333/"
        x = 2
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
        first('a.menu--tab.grid-cell').click
        find('.js-buttonLetters').click
        find('a.tile__title', :text => "b").click
        sleep 2
        page.should have_css('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__stimulus.grid-cell.js-stageStimulus > div > div > span')
        page.should have_css('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__stimulus.grid-cell.js-stageStimulus > div > div > img')
    end
end
