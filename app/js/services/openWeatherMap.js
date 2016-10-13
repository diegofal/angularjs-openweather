function openWeatherMap($http, $resource) {
  'ngInject';

 // API key is currently unused (work either with or without key)
  var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
  var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

  return $resource(apiBaseUrl + ':path/:subPath?q=:location&lat=:lat&lon=:lon',
          {
            APPID: apiKey,
            mode: 'json',
            callback: 'JSON_CALLBACK',
            units: 'metric',
            lang: 'en'
          },
          {
            queryForecastDaily: {
              method: 'JSONP',
              params: {
                path: 'forecast',
                subPath: 'daily',
                cnt: 4
              },
              isArray: false,
              headers: {
                'x-api-key': apiKey
              }
            },
            queryForecastByGeographicLocation: {
              method: 'JSONP',
              params: {
                path: 'forecast',
              },
              isArray: false,
              headers: {
                'x-api-key': apiKey
              }
            }
          }
        )
}

export default {
  name: 'openWeatherMap',
  fn: openWeatherMap
};
