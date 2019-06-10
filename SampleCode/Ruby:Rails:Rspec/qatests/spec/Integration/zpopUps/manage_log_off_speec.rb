require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

describe 'TutorMate Popup', :js => true do
    it 'visits sign in page if logged out' do
        visit "http://localhost:3333/"
        x = rand (0..1)
        x = 1
        if x == 0
          find(:css, "#applicationContainer > div > div > header > nav > div.nav--main__manage.grid-cell > a").click
        else
          find(:css, "#applicationContainer > div > div > div.table__wrapper__header > table > thead > tr > th.js-manageButton.session-cell--manage").click
        end
        sleep 3
        main, popup = page.driver.browser.window_handles
        within_window(popup) do
          find(:css, '#new_user > div.form-actions > input')
          page.driver.browser.close
        end
    end
end
