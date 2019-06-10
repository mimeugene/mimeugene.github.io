import pandas as pd
import os

win = 0
lose = 0
totaldatapoints = 4
datalist = []
allowedbad = 0
totaltempprice = 0
totaltemppriceloss = 0
nexttime = False

for filename in os.listdir('csvs'):
    nexttime = False
    # print filename
    datalist = []
    df = pd.read_csv("csvs/" + filename, error_bad_lines=False)
    try:
        for x in range(len(df)):
            tempprice = df.iloc[x,21]
            if len(datalist) < totaldatapoints:
                datalist.append(tempprice)
            if len(datalist) == totaldatapoints:
                datalist.pop(0)
                datalist.append(tempprice)
            # print datalist
            if len(datalist) == totaldatapoints:
                if nexttime == True:
                    if datalist[len(datalist)-1] > 0:
                        win = win + 1
                        totaltempprice = totaltempprice + tempprice
                        # print "Added one to win for: " + str(filename) + " at line: " + str(x) + ". tempprice is: " + str(tempprice)
                    if datalist[len(datalist)-1] < 0:
                        totaltemppriceloss = totaltemppriceloss + tempprice
                        lose = lose + 1
                        # print "Added one to lose for: " + str(filename) + " at line: " + str(x) + ". tempprice is: " + str(tempprice)
                        nexttime = False
                if sum(n < 0 for n in datalist) < allowedbad + 1:
                    if datalist[len(datalist)-1] > 0 and datalist[len(datalist)-2] > 0 and datalist[len(datalist)-3] > 0 and datalist[len(datalist)-4] > 0:
                        nexttime = True
    except:
        pass
total = win+lose
winpercent = round((float(win) / float(total))*100, 2)
losepercent = round((float(lose) / float(total))*100, 2)
averagegain = round((float(totaltempprice) / float(total)), 2)
averageloss = round((float(totaltemppriceloss) / float(total)), 2)

print "Total data points is: " + str(totaldatapoints)
print "Total bad allowed: " + str(allowedbad)
print "Win percent is: " + str(winpercent)
print "Lose percent is : " + str(losepercent)
print "Total number of wins is : " + str(win)
print "Total number of lose is: " + str(lose)
print "average open % is: " + str(averagegain)
print "average loss is: " + str(averageloss)
