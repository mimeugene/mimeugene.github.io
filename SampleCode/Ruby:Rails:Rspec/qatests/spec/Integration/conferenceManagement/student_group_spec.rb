require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

describe 'Student Group', :js => true do
    it 'drop down worked' do
        visit "http://localhost:3333/"
#load buffer
        find('#applicationContainer > div > div > header > nav > div.nav--main__manage.grid-cell > a')
        sleep 1
#initialize random row selection
        srCount = page.all("td.js-studentGroup.session-cell--group").count
        randomGroup = rand(1..srCount -1)
        base = page.all("td.js-studentGroup.session-cell--group")
#click random student group
        within(base[randomGroup]) {find('img.icon-student-group').click}
        sleep 1
#assert element present
        page.should have_css('tr.session-row--dropdown.js-groupDropdown.animated.fadeIn')
    end
end
