require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Matrix', :js => true do
    it 'hides' do
        visit "http://localhost:3333/"
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")
        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")

        within(allRow[random]) {find(".js-startSession").click}

        find('#applicationContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a.button--matrix-toggle.button--matrix-toggle--close').click
        sleep 2
        find('#applicationContainer > div > div.stage.grid.grid--center.stage--workspace.js-stage.stage--workspace--full > div.stage__menu.stage__menu--right.grid.js-menuActivity > div.button--matrix-toggle.button--matrix-toggle--open.js-buttonMatrixOpen').click
        sleep 2
        find('#applicationContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a.button--matrix-toggle.button--matrix-toggle--close')

    end
end
