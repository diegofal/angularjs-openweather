
function HomeCtrl(openWeatherMap, Geolocation) {
  // this.forecast = openWeatherMap.api().queryForecastDaily({
  //     location: 'Buenos Aires'
  // });

  var me = this;

  Geolocation.getCurrentPosition()
  	.then(function(currentPosition){
  		 me.forecast = openWeatherMap.api().queryForecastDailyByGeographicLocation({
		      lat: currentPosition.coords.latitude,
		      lon: currentPosition.coords.longitude
		  });
  		
  	})
}

HomeCtrl.$inject = ['openWeatherMap', 'Geolocation'];

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
