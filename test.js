function test(COUNTY_NAME, STATE_NAME) {
	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",
			dataType: "text",
			success: function(data) {processData(data);}
		 });
	});
	
	function processData(allText) {
		var allTextLines = allText.split(/\r\n|\n/);
		var headers = allTextLines[0].split(',');
		var lines = [];
	
		for (var i=1; i<allTextLines.length; i++) {
			var data = allTextLines[i].split(',');
			if (data.length == headers.length) {
	
				var tarr = [];
				for (var j=0; j<headers.length; j++) {
					tarr.push(headers[j]+":"+data[j]);
				}
                lines.push(tarr);
			}
		}
		// alert(lines);
	var placeName = '"county:' + COUNTY_NAME + '"' + ',' + '"state:' + STATE_NAME + '"';
	console.log(placeName);
	}
}
