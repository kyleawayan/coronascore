function gec() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementsByName("location")[0].value;
  let center = document.querySelector('.center');
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      console.log(results)
      center.classList.add('animation');
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}