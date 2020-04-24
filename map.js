function gec() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementsByName("location")[0].value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      console.log(results)
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}