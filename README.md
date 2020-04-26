## Inspiration
We wanted a much simpler way to get raw COVID-19 data, and quickly compare with other counties. Trying to find sources for different states proved to be difficult and time consuming, hence forming corona**score.**

## What it does
Our web app generates a universal score to easily compare how bad COVID-19 is around the United States. The corona**score** is based on how many cases a county has, along with their death to case ratio. The lower the better for all fields It pulls the latest data from the [NYTimes GitHub repository](https://github.com/nytimes/covid-19-data).

## How we built it
We first started by making a Node.js web server. This made it easy for everyone to run the server locally to develop on it. Using GitHub and VSCode Live Share, we were able to easily collaborate together. To deploy the app on [coronascore.awayan.com](coronascore.awayan.com), we used Amazon Elastic Beanstalk.

## Challenges we ran into
We originally planned to do it all through Python and Node.js, but quickly ran into the not-so-simple task of calling Python and Node.js scripts to a web server. We decided to take the challenge and rewrite all our scripts in Javascript, a programming language that we all didn’t know.

## Accomplishments that we're proud of
We learned Javascript within these past five days, in order to make up for the Python issues we were having.

## What we learned
All of us learned Javascript, and, for one of us, learned how to develop and code and commit to GitHub, and work on a local web server through Chrome.

## What's next for coronascore
Following seeing the corona**scores** going down, we hope to be able to terminate our server to mark the end of the COVID-19 pandemic. STAY AT HOME!
