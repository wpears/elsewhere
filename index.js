(function(){
  var geo = window.navigator.geolocation;
  var getCurr = geo.getCurrentPosition.bind(geo);
  var coords = {latitude:0,longitude:0};

  function patch(realPos){
    console.log(realPos);
    var pos = {coords:coords}
    this(pos);
  }

  window.navigator.geolocation.getCurrentPosition = function(cb){
    getCurr(patch.bind(cb))
  }

  window.setGeo = function(lat,lon){
    coords.latitude = lat;
    coords.longitude = lon;
  }
})();
