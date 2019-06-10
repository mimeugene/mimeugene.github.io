import os
import pandas as pd

removearray = []
for filename in os.listdir('csvs'):
    try:
        print filename
        strfilename = str(filename)
        data = pd.read_csv("csvs/" + strfilename)
        # if len(data) > 9:
        name = data.ix[1,0]
        print name
        os.rename("csvs/" + filename, "csvs/" + name +".csv")
        print (filename + " renamed to :" + name)
        # elif len(data) < 10:
        #     print "row length is less than 10!! REMOVING"
        #     removearray.append(filename)
        # os.remove(filename)\
    except:
        print ("found an issue with: " + strfilename)
        continue

# for each in removearray:
#     try:
#         print "this stocks" + each
#         os.remove("csvs/" + each)
#     except:
#         continue
