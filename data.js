$(document).ready(function() {
	$.ajax({
		url: "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",
		dataType: "text",
		success: function(csv)
		{
			const csvData = Papa.parse(csv, {header:true}).data
			console.log(csvData);

			function findCasesbyPlace(county, state) {
				return csvData.filter(data => data.county === county, data.state === state)[0].Cases
			  }
			  
			  console.log(
				findCasesbyPlace("Solano", "California")
			  )
		}})})