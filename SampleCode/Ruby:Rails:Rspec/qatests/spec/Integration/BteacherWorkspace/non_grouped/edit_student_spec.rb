require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Edit Student', :js => true do
    it 'showed the edit student page' do
        visit "http://localhost:3333/"
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")
        sleep 1

        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")

        within(allRow[random]) {find(".js-startSession").click}

        sleep 1/2
        find('#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a:nth-child(6)').click
        sleep 3
        find("#applicationContainer > div > div.js-overlay > div > div > div.table__wrapper.table__wrapper--student > table > tbody > tr:nth-child(2)")
    end
end
