$(document).ready(function() {
	$.ajax({
		url: "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",
		dataType: "text",
		success: function(csv)
		{
			const csvDataRev = Papa.parse(csv, {header:true}).data
			var csvData = csvDataRev.reverse();
			console.log(csvData);

			function findCasesbyPlace(county, state) {
				return csvData.filter(data => data.county === county, data => data.state === state)[0].cases
			  }
			  
			  console.log(
				findCasesbyPlace("Contra Costa", "California")
			  )
		}})})