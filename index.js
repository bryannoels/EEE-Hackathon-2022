import Geolocation from 'ol/Geolocation';

var geolocation = new Geolocation({
  // take the projection to use from the map's view
  projection: view.getProjection()
});
// listen to changes in position
geolocation.on('change', function(evt) {
  window.console.log(geolocation.getPosition());
});