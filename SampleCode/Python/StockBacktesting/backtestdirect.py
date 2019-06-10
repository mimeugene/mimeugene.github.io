import pandas as pd
import os
win = 0
lose = 0
counter = 0
xnumber = 7
totaltempprice = 0
for filename in os.listdir('csvs'):
    print filename
    df = pd.read_csv("csvs/" + filename, error_bad_lines=False)
    counter = 0
    try:
        for x in range(len(df)):
            tempprice = df.iloc[x,19]
            if counter > xnumber:
                # print counter
                if tempprice > 0:
                    win = win + 1
                    totaltempprice = totaltempprice + tempprice
                    # print "Added one to win for: " + str(filename) + " at line: " + str(x) + ". tempprice is: " + str(tempprice) + ". Counter is : " + str(counter)
                if tempprice < 0:
                    totaltempprice = totaltempprice + tempprice
                    lose = lose + 1
                    # print "Added one to lose for: " + str(filename) + " at line: " + str(x) + ". tempprice is: " + str(tempprice) + ". Counter is : " + str(counter)

            if tempprice < 0:
                counter = 0
            if tempprice > 0:
                counter = counter + 1
    except:
        pass
total = win+lose
winpercent = round((float(win) / float(total))*100, 2)
losepercent = round((float(lose) / float(total))*100, 2)
averagegain = round((float(totaltempprice) / float(total))*100, 2)

print "Changing variable is: " + str(xnumber)
print "Win percent is: " + str(winpercent)
print "Lose percent is : " + str(losepercent)
print "Total number of wins is : " + str(win)
print "Total number of lose is: " + str(lose)
print "average open % is: " + str(averagegain)
