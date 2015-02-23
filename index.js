(function(){
  var geo = window.navigator.geolocation;
  var getCurr = geo.getCurrentPosition.bind(geo);
  var latitude = 0;
  var longitude = 0;

  function patch(realPos){
    var pos = JSON.parse(JSON.stringify(realPos));
    pos.coords.latitude = latitude;
    pos.coords.longitude = longitude;
    this(pos);
  }

  window.navigator.geolocation.getCurrentPosition = function(cb){
    getCurr(patch.bind(cb))
  }

  window.setGeo = function(lat,lon){
    latitude = lat;
    longitude = lon;
  }
})();
