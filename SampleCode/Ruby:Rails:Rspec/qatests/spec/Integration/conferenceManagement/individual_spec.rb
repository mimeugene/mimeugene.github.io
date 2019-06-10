require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

describe 'Single session name', :js => true do
    it 'is alphabetical' do
        visit "http://localhost:3333/"
          find('#applicationContainer > div > div > header > span')
          sleep 1

#Alpha method
          def sort_string(string)
            string.split(' ').sort.join('  ')
          end

#initiates random row selection
          rowCount = page.all("tr.student-row--group").count
          random = rand(1..rowCount -1)
          allRow = page.all("tr.student-row--group")

#initiates random single row selection
          srCount = page.all("img.icon-student").count
          randomGroup = rand(1..srCount -1)
          base = page.all("img.icon-student")
#find path of parent
          groupRow = base[randomGroup].find(:xpath, '..')
          singleRow = groupRow.find(:xpath, '..')

#find and manipulate students in conference management
          x = within(singleRow) {find("td.session-cell--name").text}
          #x = page.find("td.session-cell--name").text
          x = x.gsub '. • RS', ''
          x = x.gsub ' ', ''
          x = x.gsub(/[^a-zA-Z ]/,' ').gsub(/ +/,' ')
          x = sort_string(x)
          x = x.gsub ' ', ''

#find and manipulate students in Teacher workspace
          within(singleRow) {find(".js-startSession").click}
          z = page.find("#applicationContainer > div > div.js-matrix > div > nav.matrix__student-selector > div > div").text
          z = z.gsub ' STUDENT', ''
          z = z.gsub ' ', ''
          z = z.gsub '.', '.  '
          z = z.gsub(/[^a-zA-Z ]/,'').gsub(/ +/,' ')
          z = sort_string(z)
          z = z.gsub ' ', ''

#compare results of CM and TW
            if x != z
              fail
            end
    end
end
