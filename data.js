import { startcount, info, deaths } from './countup.js'
export function countyResults(COUNTY_NAME, STATE_NAME)	{
	$(document).ready(function() {
		$.ajax({
			url: "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",
			dataType: "text",
			success: function(csv)
			{
				const csvDataRev = Papa.parse(csv, {header:true}).data
				var csvData = csvDataRev.reverse();
	
				function findDatebyPlace(county, state) {
					return csvData.filter(data => data.county === county, data => data.state === state)[0].date
				  }
	
				function findCasesbyPlace(county, state) {
					return csvData.filter(data => data.county === county, data => data.state === state)[0].cases
				  }
	
				function findDeathsbyPlace(county, state) {
				return csvData.filter(data => data.county === county, data => data.state === state)[0].deaths
				}
				  
				  
				var cvDate = findDatebyPlace(COUNTY_NAME, STATE_NAME)
				var C = findCasesbyPlace(COUNTY_NAME, STATE_NAME)
				var D = findDeathsbyPlace(COUNTY_NAME, STATE_NAME)
				console.log(cvDate, C, D)

				var coronascore = C * (D / C) + 10

				console.log(coronascore)
				startcount(coronascore)
				info(cvDate, C, D)
				deaths(cvDate, C, D)
			}})})
}