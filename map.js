function gec() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementsByName("location")[0].value;
  let center = document.querySelector('.center');
  let score = document.querySelector('.score');
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      var arrayRes = JSON.stringify((results[0])['address_components']).split(':');
      var foundB = arrayRes.indexOf('["administrative_area_level_1","political"]},{"long_name"');
      console.log(arrayRes)
      var stateName = (arrayRes[foundB-2].split(','))[0];
      STATE_NAME = stateName.slice(1, -1);

      if (STATE_NAME == 'New York') {
        console.log((results[0])['address_components'])
        if (arrayRes.includes('["administrative_area_level_2","political"]},{"long_name"') == false)  {
          COUNTY_NAME = 'New York City'
          center.classList.add('animation');
          score.classList.remove('hidden');
          score.classList.add('visible');

          console.log("county =" ,COUNTY_NAME, " state =" ,STATE_NAME);
          countyResults(COUNTY_NAME, STATE_NAME);
        }
        else  {
          var foundA = arrayRes.indexOf('["administrative_area_level_2","political"]},{"long_name"');
          var countyName = (arrayRes[foundA-1].split(','))[0];

          if (countyName.slice(1, -1) == 'New York County' || countyName.slice(1, -1) == 'Bronx County'){
            COUNTY_NAME = 'New York City'
          }
          else if (countyName.slice(1, -1) == 'Queens County')  {
            COUNTY_NAME = 'New York City'
          }
          else {
            COUNTY_NAME = countyName.slice(1, -8)
          }

          center.classList.add('animation');
          score.classList.remove('hidden');
          score.classList.add('visible');

          console.log("county =" ,COUNTY_NAME, " state =" ,STATE_NAME);
          countyResults(COUNTY_NAME, STATE_NAME)
        }
      }
      else {
        var foundA = arrayRes.indexOf('["administrative_area_level_2","political"]},{"long_name"');
        var countyName = (arrayRes[foundA-1].split(','))[0];

        if (countyName.endsWith('County"') == true) {
          var COUNTY_NAME = countyName.slice(1, -8)
        }
        else {
          var COUNTY_NAME = countyName.slice(1, -1)
        }

        center.classList.add('animation');
        score.classList.remove('hidden');
        score.classList.add('visible');

        console.log("county =" ,COUNTY_NAME, " state =" ,STATE_NAME);
        countyResults(COUNTY_NAME, STATE_NAME);
        
          }
      }
      
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })
}