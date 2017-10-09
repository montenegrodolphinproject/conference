// --------------------------------------------------------------------
// Google Map
// --------------------------------------------------------------------

function initGoogleMap(el, lat, lng) {
  if (!lat || !lng) {
    return;
  }
  //set your google maps parameters
  var $map_zoom = 18;
  /* ZOOM SETTING */

  //google map custom marker icon
  var $marker_url = 'img/google-map-marker.png';
  var location = new google.maps.LatLng(lat, lng);

  //set google map options
  var map_options = {
    center: location,
    zoom: $map_zoom,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
  };
  //initialize the map
  var map = new google.maps.Map(el, map_options);
  //add a custom marker to the map
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    visible: true,
    icon: $marker_url,
  });
}

export default initGoogleMap;
