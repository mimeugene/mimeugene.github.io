# -*- coding: utf-8 -*-

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import pandas as pd

#read all stocks from allstocksraw csv file located in same folder.
data = pd.read_csv('allstocksraw.csv')
data.head()
allstockarray = data['Symbol'].values
#print allstockarray

chrome_options = Options()
# chrome_options.add_argument("--headless");
chrome_options.add_experimental_option("prefs", {
  "download.default_directory": r"⁩/csvs",
  "download.prompt_for_download": False,
  "download.directory_upgrade": True,
  "safebrowsing.enabled": True
})

driver = webdriver.Chrome(chrome_options=chrome_options)
driver.implicitly_wait(15)

driver.get(<Website Removed>)
assert "Earnings History" in driver.title
driver.find_element_by_css_selector("body > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1)").click()
loginfield = driver.find_element_by_id("id_username")
loginfield.send_keys("mim.eugene@gmail.com")
passwordfield = driver.find_element_by_id("id_password")
passwordfield.send_keys(<Password Removed>)
driver.find_element_by_css_selector('#topmenu_login > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type="image"]').click()
#insert for loop below
testarray = ["A", "AA", "AABA", "AAL", "AAN", "AAOI", "AAP", "AAPL", "AAXN", "AB", "ABB", "ABBV", "ABC", "ABCB"]
for x in allstockarray:
    driver.get(<Website Removed> + x)
    print "grabbed " + x + " data!"

print ('made it')
driver.close()
