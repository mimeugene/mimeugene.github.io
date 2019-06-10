require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe '(un)flip button', :js => true do
    it 'works' do
      visit "http://localhost:3333/"
      find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession").click
      sleep 1
      find(:css, '.js-editStudentButton').click
      sleep 1
      find('#js-editReadingStage').click
      sleep 1
      find('#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > div.reading-stage-chooser.grid.grid--wrap.grid--center > a:nth-child(1)').click
        sleep 1
        page.should have_css ".reading-stage__choice.grid-cell.st-selected", :text => 1
        find(:css, '.button.grid-cell.button--close-student-edit.js-exitEditStudent').click
        using_wait_time (1) do


          find(:css, ".tile__title", :text => "a").click
          sleep 1
          page.should have_css('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__stimulus.grid-cell.js-stageStimulus > div > div')
          find(:css, '#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__menu.stage__menu--left.grid > div.js-stageButtonFlip > button').click
          sleep 1
          page.should have_css('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__stimulus.grid-cell.js-stageStimulus.st-flipped')
          find(:css, '#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__menu.stage__menu--left.grid > div.js-stageButtonFlip > button').click
          page.should have_no_content('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__stimulus.grid-cell.js-stageStimulus.st-flipped')



        find(:css, '.icon-text--vertical.button--manage').click
    end
end
end
