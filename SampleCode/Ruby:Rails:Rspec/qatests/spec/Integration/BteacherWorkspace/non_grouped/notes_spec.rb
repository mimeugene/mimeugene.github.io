require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Notes', :js => true do
    it 'saved changes' do
        visit "http://localhost:3333/"
        x = rand(1..9)
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")
        sleep 1

        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")

        within(allRow[random]) {find(".js-startSession").click}

        sleep 1/2
        find(:css, '#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a.menu--tab.grid.grid-cell.grid--center.st-active > span.menu__icon > img').click
        sleep 2
        find(:css, "#js-editNotes").click

        find('#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > article > section > textarea').click
        sleep 2
        find(:css, '#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > article > section > textarea').set("testestest")
        find('#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > article > section.edit-notes__buttons.grid > button.button--save-note.grid-cell.js-saveNote').click
        find('#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > aside > div > ul > li:nth-child(1)', :text => "testestest")
    end
end
