(function(){
  var geo = window.navigator.geolocation;
  var getCurr = geo.getCurrentPosition.bind(geo);

  function patch(pos){
    pos = {coords:{latitude:36.75,longitude:-119.767}}
    this(pos);
  }

  window.navigator.geolocation.getCurrentPosition = function(cb){
    getCurr(patch.bind(cb))
  }
})();
