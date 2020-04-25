import { countyResults } from './data.js'
document.getElementById("submit").addEventListener("click", gec)

export function gec() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementsByName("location")[0].value;
  console.log(address);
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      var arrayRes = JSON.stringify((results[0])['address_components']).split(':');
      var foundB = arrayRes.indexOf('["administrative_area_level_1","political"]},{"long_name"');
      var stateName = (arrayRes[foundB-2].split(','))[0];
      var STATE_NAME = stateName.slice(1, -1);

      if (STATE_NAME == 'New York') {
        console.log(results)
        if (arrayRes.includes('["administrative_area_level_2","political"]},{"long_name"') == false)  {
          COUNTY_NAME = 'New York City'
          center.classList.add('animation');
          score.classList.remove('hidden');
          score.classList.add('visible');
          countyResults(COUNTY_NAME, STATE_NAME);
        }
        else  {
          var foundA = arrayRes.indexOf('["administrative_area_level_2","political"]},{"long_name"');
          var countyName = (arrayRes[foundA-1].split(','))[0];

          if (countyName.slice(1, -1) == 'New York County' || countyName.slice(1, -1) == 'Bronx County'){
            COUNTY_NAME = 'New York City'
          }
          else if (countyName.slice(1, -1) == 'Queens County' || countyName.slice(1, -1) == 'Kings County')  {
            COUNTY_NAME = 'New York City'
          }
          else {
            COUNTY_NAME = countyName.slice(1, -8)
          }

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

        countyResults(COUNTY_NAME, STATE_NAME);
        
          }
      }
      
      
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })
}