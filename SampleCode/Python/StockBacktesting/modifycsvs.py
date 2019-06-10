import pandas as pd
import os

for filename in os.listdir('csvs'):
    df = pd.read_csv("csvs/" + str(filename))
    df = df.drop(df.columns[[0, 1, 3]], axis=1) 
         # 'Unnamed: 0.1', 'Unnamed: 0.1.1', 'Unnamed: 0.1.1.1', 'Percent Day Max'
        # print filename
        # matharray = []
        # df = pd.read_csv("csvs/" + str(filename))
        # for x in range(len(df)):
        #     priceclose = df.iloc[x, 8]
        #     priceopen = df.iloc[x, 9]
        #     percent = round(((priceopen / priceclose)-1)*100, 2)
        #     # percent = ((priceopen / priceclose)-1)*100
        #     matharray.append(percent)
        # new_column = pd.DataFrame({'Percent Day Max New': matharray})
        # df = df.merge(new_column, left_index = True, right_index = True)
        # df.to_csv("csvmod/" + str(filename))
