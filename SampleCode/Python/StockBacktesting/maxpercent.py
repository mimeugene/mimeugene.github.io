import pandas as pd
import os
import math

total = 0
openthreshold =1
openthresholdmax = 2
maxpercenttotal = 0
minpercenttotal = 0

for filename in os.listdir('csvs'):
    # print filename
    df = pd.read_csv("csvs/" + filename, error_bad_lines=False)
    counter = 0
    try:
        for x in range(len(df)):
            openpercent = df.iloc[x,21]
            maxpercent = df.iloc[x,25]
            minpercent = df.iloc[x,24]
            # print "open percent for : " + str(filename) + " is: " + str(openpercent)
            # print "open percent is : " + str(openpercent) + "||| max percent for : " + str(filename) + " is: " + str(maxpercent) + "||| min percent is: " + str(minpercent)+ " at line: " + str(x)
            if openpercent > openthreshold and openpercent < openthresholdmax:
                # print "adding"
                if math.isnan(minpercent) == False and math.isnan(maxpercent) == False:
                    maxpercenttotal = maxpercenttotal + maxpercent
                    minpercenttotal = minpercenttotal + minpercent
                    total = total + 1
    except:
        pass

averagegain = round((float(maxpercenttotal) / float(total)), 2)
averageloss = round((float(minpercenttotal) / float(total)), 2)
# print "Min percent total is : " + str(minpercenttotal)
print "Open Threshhold is: " + str(openthreshold)
print "Total is: " + str(total)
print "average gain % is : " + str(averagegain)
print "average loss % is : " + str(averageloss)
