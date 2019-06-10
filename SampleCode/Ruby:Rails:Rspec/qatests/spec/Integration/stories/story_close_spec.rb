require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Stage stories', :js => true do
    it 'close worked' do
        visit "http://localhost:3333/"
        x = rand(4..7)

        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")
        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")

        within(allRow[random]) {find(".js-startSession").click}
        sleep 1/2
        find(:css, '#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a.menu--tab.grid.grid-cell.grid--center.st-active > span.menu__icon > img').click
        sleep 2
        find('#js-editReadingStage').click
        sleep 1
        find("#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > div.reading-stage-chooser.grid.grid--wrap.grid--center > a:nth-child(#{x})").click
        page.should have_css ".reading-stage__choice.grid-cell.st-selected", :text => x
        find(:css, '.button.grid-cell.button--close-student-edit.js-exitEditStudent').click
        find('span.menu__label', :text => "STAGE STORIES").click

        sleep 1
        eleCount = page.all("a.tile__title").count
        z = eleCount -1
        random = rand(0..z)
        allEle = page.all("div.tile.grid-cell.u-text-center")

        #find('div.tile.grid-cell.u-text-center', :text => "1").click
        #find(allEle[random]).click
        first('div.tile.grid-cell.u-text-center').click

        page.should have_css ('#applicationContainer > div > div.js-overlay > div > div > button.button.button--close.js-storyButtonCloseStory > img')
        page.should have_css ('#applicationContainer > div > div.js-overlay > div > div > div.stage--story__gallery.flickity-enabled.is-draggable > div > div > div.story__page.is-selected > figure > figcaption')
        page.should have_css ('#applicationContainer > div > div.js-overlay > div > div > button.story__flip.js-storyButtonFlip > button > img')
        find('#applicationContainer > div > div.js-overlay > div > div > button.button.button--close.js-storyButtonCloseStory > img').click
        find("span.menu__label", :text => "STAGE STORIES")
        page.should have_css('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage > div.js-stageButtonEndSession > button')

    end
end
