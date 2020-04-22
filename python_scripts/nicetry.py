import requests
from bs4 import BeautifulSoup
import pandas as pd
url = "https://en.wikipedia.org/wiki/Template:2020_coronavirus_pandemic_by_California_county"
page = requests.get(url)
soup = BeautifulSoup(page.text, "lxml")

table = soup.find("table")
rows = table.find_all('tr')
columns = [v.text.replace('\n', '') for v in rows[0].find_all('th')]
df = pd.DataFrame(columns=columns)

for i in range(2, len(rows)-2):
    tds = rows[i].find_all('td')
    ths = rows[i].find('th')

    if len(tds) == 5:
        cases = tds[0].text.replace('\n', '')
        deaths = tds[1].text.replace('\n', '')
        recov = tds[2].text.replace('\n', '')
        cases10k = tds[3].text.replace('\n', '')
        refer = tds[4].text.replace('\n', '')
        county = ths.text.replace('\n', '')

        values = [county, cases, deaths, recov, cases10k, refer]
    
    df = df.append(pd.Series(values, index=columns), ignore_index=True)

print(df)
print(' ', len(rows) - 4, 'counties found')