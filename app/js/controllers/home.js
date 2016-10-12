
function HomeCtrl(openWeatherMap, Geolocation, AppSettings) {
  var me = this;

  me.getForecastByCity = function(location){
  	me.forecast = openWeatherMap.api().queryForecastDaily({
	      location: location
	});
  }

  Geolocation.getCurrentPosition()
  	.then(function(currentPosition){
  		 me.forecast = openWeatherMap.api().queryForecastByGeographicLocation({
		      lat: currentPosition.coords.latitude,
		      lon: currentPosition.coords.longitude
		  });
  		
  	}, function(){
  		me.locationDisabled = true;

  		me.forecast = openWeatherMap.api().queryForecastDaily({
		      location: AppSettings.defaultLocation
		});
  	})
}

HomeCtrl.$inject = ['openWeatherMap', 'Geolocation', 'AppSettings'];

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
