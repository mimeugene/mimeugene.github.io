require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Mastery level', :js => true do
    it 'was applied' do
        visit "http://localhost:3333/"
        x = rand(1..9)
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")

        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")

        within(allRow[random]) {find(".js-startSession").click}

        find('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__menu.stage__menu--left.grid > div.js-stageButtonTimer > button').click
        page.should have_css('#js-timer1_button')
        find('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.stage__menu.stage__menu--left.grid > div.js-stageButtonTimer > button').click
        sleep 1
        page.should have_no_css('#js-timer1_button')


    end
end
