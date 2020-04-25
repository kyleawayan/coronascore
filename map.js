function gec() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementsByName("location")[0].value;
  let center = document.querySelector('.center');
  let score = document.querySelector('.score');
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      var arrayRes = JSON.stringify((results[0])['address_components']).split(':');
      console.log(JSON.stringify(results[0]).split(':'));
      var foundA = arrayRes.indexOf('["administrative_area_level_2","political"]},{"long_name"');
      var countyName = (arrayRes[foundA-1].split(','))[0];

      var foundB = arrayRes.indexOf('["administrative_area_level_1","political"]},{"long_name"');
      var stateName = (arrayRes[foundB-2].split(','))[0];
      STATE_NAME = stateName.slice(1, -1);
      if (countyName.endsWith('County"') == true) {
        var COUNTY_NAME = countyName.slice(1, -8)
        test(COUNTY_NAME, STATE_NAME)
      }
      else {
        var COUNTY_NAME = countyName.slice(1, -1)
        test(COUNTY_NAME, STATE_NAME)
      }

      center.classList.add('animation');
      score.classList.remove('hidden');
      score.classList.add('visible');
    } 
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })

}