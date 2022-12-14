function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.250399331199496, lng: 22.56586883496531 },
    zoom: 2,
  });

var marker = new google.maps.Marker({
    position: { lat: 51.250399331199496, lng: 22.56586883496531 },
    map: map,
  });

var infowindow = new google.maps.InfoWindow({
    content:"Flight from O'Hare to Warsaw! The marker shows Lublin, the city that my family is from!"
  });

infowindow.open(map, marker);

var flightPlanCoordinates = [
    { lat: 41.978611, lng: -87.904724 },
    { lat: 52.1595, lng: 20.9670 },
  ];

var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);

}

window.initMap = initMap;
