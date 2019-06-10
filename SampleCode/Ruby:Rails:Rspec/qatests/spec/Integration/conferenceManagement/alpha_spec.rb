require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

describe 'Names', :js => true do
    it 'are alphabetical' do
        visit "http://localhost:3333/"
          find('#applicationContainer > div > div > header > span')

#Alpha method
          def sort_string(string)
            string.split(' ').sort.join('  ')
          end

#initiates random row selection
          rowCount = page.all("tr.student-row--group").count
          random = rand(1..rowCount -1)
          allRow = page.all("tr.student-row--group")

#initiates random group row selection
          srCount = page.all("td.js-studentGroup.session-cell--group").count
          randomGroup = rand(1..srCount -1)
          base = page.all("td.js-studentGroup.session-cell--group")
#find path of parent
          groupRow = base[randomGroup].find(:xpath, '..')

#find and manipulate students in conference management
          within(groupRow) {find(".js-studentGroup.session-cell--group").click}
          x = page.find(".student-choice").text
          x = x.gsub '. • RS', ''
          x = x.gsub ' ', ''
          x = x.gsub(/[^a-zA-Z ]/,' ').gsub(/ +/,' ')
          x = sort_string(x)
          x = x.gsub ' ', ''

#find and manipulate students in Teacher workspace
          within(groupRow) {find(".js-startSession").click}
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
