require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

describe 'Add student page', :js => true do
    it 'it loaded' do
        visit "http://localhost:3333/"
          find('#applicationContainer > div > div > header > span')
          sleep 1
#initiates random single row selection
          srCount = page.all("img.icon-student").count
          randomGroup = rand(1..srCount -1)
          base = page.all("img.icon-student")
#find path of parent
          groupRow = base[randomGroup].find(:xpath, '..')
          singleRow = groupRow.find(:xpath, '..')
#start random single session
          within(singleRow) {find(".js-startSession").click}
#find and assert add student visible
          find('#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a:nth-child(2)').click
          sleep 1
          page.should have_css('#applicationContainer > div > div.js-overlay > div > div > div.table__wrapper__header.table__wrapper__header--student > table > thead > tr > td.session-cell--manage.js-cancelAddStudent')

    end
end
