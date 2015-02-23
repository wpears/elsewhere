(function(){
  var geo = window.navigator.geolocation;
  var getCurr = geo.getCurrentPosition.bind(geo);
  var latitude = 39.04;
  var longitude = 125.75;

  function patch(realPos){
    var pos = JSON.parse(JSON.stringify(realPos));
    var coords = pos.coords;

    coords.latitude = latitude;
    coords.longitude = longitude;
    coords.constructor = realPos.coords.constructor;
    pos.constructor = realPos.constructor;

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
