
function HomeCtrl(openWeatherMap, geolocation, AppSettings, $q) {
  var me = this;
  
  me.getForecastByCustomLocation = function(customLocation){
  	me.forecast = openWeatherMap.api().queryForecastDaily({
	      location: customLocation
	  });
  }

  me.getForecast = function(){
    var deferred = $q.defer();

    geolocation.getCurrentPosition()
      .then(function(currentPosition){
        getForecastByGreographicLocation(currentPosition, deferred);
      }, function(){
        getForecastByDefaultLocation(deferred);
    })

    return deferred.promise;
  }

  function getForecastByGreographicLocation(currentPosition, deferred){
    me.locationDisabled = false;

    openWeatherMap.queryForecastByGeographicLocation({
        lat: currentPosition.coords.latitude,
        lon: currentPosition.coords.longitude
    }).$promise.then(function(forecast){
      me.forecast = forecast;
      deferred.resolve(me.forecast);
    });
  }

  function getForecastByDefaultLocation(deferred){
    me.locationDisabled = true;

    openWeatherMap.queryForecastDaily({
        location: AppSettings.defaultLocation
    }).$promise.then(function(forecast){
      me.forecast = forecast;
      deferred.resolve(me.forecast);
    });
  }

  me.getForecast();
}

HomeCtrl.$inject = ['openWeatherMap', 'geolocation', 'AppSettings', '$q'];

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
