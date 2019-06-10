require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

describe 'Add student page', :js => true do
    it 'added student' do
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
#open add student
          find('#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div > a:nth-child(2)').click
          sleep 2
#initiate random row selection
#initiates random row selection
          rowCount = page.all("td.session-cell--name").count
          random = rand(1..rowCount -1)
          allRow = page.all("td.session-cell--name")
          z = (allRow[random])
          x = (z).text
          y = z.find(:xpath, '..')
          within(y) {find('td.session-cell--start.session-cell--start--student.js-addStudent').click}
          sleep 1
          page.should have_content(x)
    end
end
