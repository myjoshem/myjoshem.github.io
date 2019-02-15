function initMap() {
  var location = {lat: 42.274350, lng: -111.755800};
  var map = new google.maps.Map(document.getElementById("map"),
   {zoom: 4,
   center: location
   });
   var marker = new google.maps.Marker({
     position: location,
     map: map
   });
}