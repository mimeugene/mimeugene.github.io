require 'spec_helper'

    Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end
describe 'Mastery level', :js => true, :long => true do
    it 'was applied to RL 2' do
        visit "http://localhost:3333/"
        x = 7
#wait till elements load
        find(:css, "#applicationContainer > div > div > div.table__wrapper > table > tbody > tr:nth-child(1) > td.session-cell--start.js-startSession")
#initiates random row selection
        rowCount = page.all("tr.student-row--group").count
        random = rand(1..rowCount -1)
        allRow = page.all("tr.student-row--group")
#selects random session
        within(allRow[random]) {find(".js-startSession").click}
#carefully changes reading level
        sleep 1
        find(:css, '.js-editStudentButton').click
        sleep 2
        find('#js-editReadingStage').click
        sleep 1
        find("#applicationContainer > div > div.js-overlay > div > div.stage.stage--edit > div > div > div > a:nth-child(#{x})").click
        sleep 1
        page.should have_css ".reading-stage__choice.grid-cell.st-selected", :text => x
        find(:css, '.button.grid-cell.button--close-student-edit.js-exitEditStudent').click
        sleep 2
        find('#applicationContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(1) > span').click

#intiate count of elements
        sleep 1
        eleCount = page.all("div.tile.grid-cell.u-text-center").count
        z = eleCount -1
        allEle = page.all("div.tile.grid-cell.u-text-center")
#initiate loop
        using_wait_time (1.0/10) do
          (0..z).each do |i|
            #find( '.tile__title', text: (allEle[i].text), exact: true
            #find( 'a', text: 'Berlin', exact: true )
          #  /\ABerlin\z/)
          find(:css, ".tile__title", :text => (allEle[i].text), :match => :prefer_exact).click
          find(:xpath, '//div/div[1]/nav/div[1]/button').click
          find(:css, ".tile__title.st-mastered", :text => (allEle[i].text))
          find(:xpath, '//div/div[1]/nav/div[4]/button').click
          find(:xpath, '//div/div[1]/nav/div[2]/button').click
          find(:css, ".tile__title.st-learning.st-selected", :text => (allEle[i].text))
          find(:xpath, '//div/div[1]/nav/div[4]/button').click
          find(:xpath, '//div/div[1]/nav/div[3]/button').click
          find(:css, ".tile__title.st-needs_work.st-selected", :text => (allEle[i].text))
          find(:xpath, '//div/div[1]/nav/div[4]/button').click
          page.should have_css ".tile__title.st-clear.st-selected", :text => (allEle[i].text)
        end
      end

      find('#applicationContainer > div > div.js-matrix > div > nav.matrix__menu > div > div > a:nth-child(2) > span').click

#intiate count of elements
      sleep 1
      eleCount = page.all("div.tile.grid-cell.u-text-center").count
      z = eleCount -1
      allEle = page.all("div.tile.grid-cell.u-text-center")
#initiate loop
      using_wait_time (1.0/10) do
        (0..z).each do |i|
          #find( '.tile__title', text: (allEle[i].text), exact: true
          #find( 'a', text: 'Berlin', exact: true )
        #  /\ABerlin\z/)
        find(:css, ".tile__title", :text => (allEle[i].text), :match => :prefer_exact).click
        find(:xpath, '//div/div[1]/nav/div[1]/button').click
        find(:css, ".tile__title.st-mastered", :text => (allEle[i].text))
        find(:xpath, '//div/div[1]/nav/div[4]/button').click
        find(:xpath, '//div/div[1]/nav/div[2]/button').click
        find(:css, ".tile__title.st-learning.st-selected", :text => (allEle[i].text))
        find(:xpath, '//div/div[1]/nav/div[4]/button').click
        find(:xpath, '//div/div[1]/nav/div[3]/button').click
        find(:css, ".tile__title.st-needs_work.st-selected", :text => (allEle[i].text))
        find(:xpath, '//div/div[1]/nav/div[4]/button').click
        page.should have_css ".tile__title.st-clear.st-selected", :text => (allEle[i].text)
      end
    end


        find(:css, '.icon-text--vertical.button--manage').click
    end
end
