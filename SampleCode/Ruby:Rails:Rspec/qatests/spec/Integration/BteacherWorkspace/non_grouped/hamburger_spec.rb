require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Hamburger', :js => true do
    it 'button worked' do
        visit "http://localhost:3333/"
        x = rand(1..9)
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession").click
        sleep 1/2
        find('#applicationContainer > div > header > button').click
        sleep 1
        page.has_css?('#applicationContainer > div > header > nav > div.nav--main__manage.grid-cell > a')
        page.has_css?('#applicationContainer > div > header > nav > div.nav--main__logout.grid-cell > a')
    end
end
