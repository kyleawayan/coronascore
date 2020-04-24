function gec() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementsByName("location")[0].value;
  let center = document.querySelector('.center');
  let score = document.querySelector('.score');
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      console.log(results)
      center.classList.add('animation');
      score.classList.remove('hidden');
      score.classList.add('visible');
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}