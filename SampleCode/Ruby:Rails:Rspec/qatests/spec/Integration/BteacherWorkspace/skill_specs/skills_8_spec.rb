require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Skills stage 8', :js => true, :long => true do
    it 'showed Sight Words, Onsets & Rimes & Leveled Texts' do
        visit "http://localhost:3333/"
        x = 8

        find('#applicationContainer > div > div > header > span')
        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")
        within(allRow[random]) {find(".js-startSession").click}

        sleep 1/2
        find(:css, '#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a.menu--tab.grid.grid-cell.grid--center.st-active > span.menu__icon > img').click
        sleep 2
        find('#js-editReadingStage').click
        find("#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > div.reading-stage-chooser.grid.grid--wrap.grid--center > a:nth-child(#{x})").click
        page.should have_css ".reading-stage__choice.grid-cell.st-selected", :text => x
        find(:css, '.button.grid-cell.button--close-student-edit.js-exitEditStudent').click
        page.should have_content("ONSETS & RIMES")
        page.should have_content("LEVELED TEXTS")
        page.should have_content("SIGHT WORDS")
    end
end
