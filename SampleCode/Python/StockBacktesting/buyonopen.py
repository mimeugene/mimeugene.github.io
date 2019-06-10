import pandas as pd
import os
win = 0
lose = 0
percentgain=0
openthreshold = 10
for filename in os.listdir('csvs'):
    # print filename
    df = pd.read_csv("csvs/" + filename, error_bad_lines=False)
    counter = 0
    try:
        for x in range(len(df)):
            openprice = df.iloc[x,18]
            closeprice = df.iloc[x,19]
            # print counter
            if openprice > openthreshold:
                if openprice < closeprice:
                    win = win + 1
                    percentgain = percentgain + (closeprice - openprice)
                    print "Added one to win for: " + str(filename) + " at line: " + str(x)
                if openprice > closeprice:
                    percentgain = percentgain + (closeprice - openprice)
                    lose = lose + 1
                    print "Added one to lose for: " + str(filename) + " at line: " + str(x)
    except:
        pass
total = win+lose
winpercent = round((float(win) / float(total))*100, 2)
losepercent = round((float(lose) / float(total))*100, 2)
averagegain = round((float(percentgain) / float(total)), 2)
print percentgain

print "Open Threshhold is: " + str(openthreshold)
print "Win percent is: " + str(winpercent)
print "Lose percent is : " + str(losepercent)
print "Total number of wins is : " + str(win)
print "Total number of lose is: " + str(lose)
print "Total is: " + str(total)
print "average gain % is : " + str(averagegain)
