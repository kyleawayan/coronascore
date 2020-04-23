# Call with file.py <State> <County>
# if county is 'listall', tmp file will show all counties

import pandas as pd
import os
from pathlib import Path
import sys

data_folder = Path('csvs')
path = os.path.join(data_folder,'covid_19_counties.csv')

df = pd.read_csv(path, error_bad_lines=False, index_col=False)

myState = sys.argv[1]
myCounty = sys.argv[2]

if myCounty == 'listall':
    df = df.loc[df['state'] == myState]
    df.reset_index(drop=True, inplace=True)
    df = df.drop(columns=['Unnamed: 0', 'state', 'fips'])
    print('Check tmp.csv!')
else:
    df = df.loc[(df['county'] == myCounty) & (df['state'] == myState)]
    df.reset_index(drop=True, inplace=True)
    df = df.drop(columns=['Unnamed: 0', 'county', 'state', 'fips'])
    result = pd.concat([df.tail(1)])
    print(f'\nLatest data:\n{result}\n')

df.to_csv(os.path.join(data_folder,'tmp.csv'))