require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Start Session', :js => true do
    it 'worked' do
        visit "http://localhost:3333/"
        find(:xpath, "//div/div/div[2]/table/tbody/tr[1]/td[11]").click
        find(:css, '.icon-text--vertical.button--manage').click
        find(:xpath, "//div/div/div[2]/table/tbody/tr[1]/td[11]")
      end
end
