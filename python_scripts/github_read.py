# Call with file.py <State> <County>
# if county is 'listall', tmp file will show all counties

import pandas as pd
import os
from pathlib import Path
import sys

url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'
data_folder = Path('csvs')
path = os.path.join(data_folder,'covid_19_counties.csv')
file_path = Path('csvs/tmp.csv')

df = pd.read_csv(url, error_bad_lines=False)

df.to_csv(path, index=True)
print('CSV Created!')

try:
    file_path.unlink()
except OSError as e:
    print("Error: %s : %s" % (file_path, e.strerror))

## Uncomment to 'incorporate' csv_read
#
## myState = sys.argv[1]
## myCounty = sys.argv[2]
## 
## if myCounty == 'listall':
##     df = df.loc[df['state'] == myState]
##     df.reset_index(drop=True, inplace=True)
##     df = df.drop(columns=['state', 'fips'])
##     print('Check temp.csv!')
## else:
##     df = df.loc[(df['county'] == myCounty) & (df['state'] == myState)]
##     df.reset_index(drop=True, inplace=True)
##     df = df.drop(columns=['county', 'state', 'fips'])
##     result = pd.concat([df.tail(1)])
##     print(f'\nLatest data:\n{result}\n')
## 
## df.to_csv(os.path.join(data_folder,'temp.csv'))
