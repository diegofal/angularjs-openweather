describe('Unit: HomeCtrl', function() {

  let _geolocationService, _openWeatherMapService, _createController, _$q, _$rootScope;
  let _currentPositionPromiseDeferred, _weatherPromiseDeferred;


  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller, openWeatherMap, geolocation, AppSettings, $q, $rootScope) => {
      
      _geolocationService = geolocation;
      _openWeatherMapService = openWeatherMap;

      _$q = $q;
      _$rootScope = $rootScope;
      
      _currentPositionPromiseDeferred = _$q.defer();
      _weatherPromiseDeferred = _$q.defer();

      spyOn(_geolocationService, 'getCurrentPosition').and.returnValue(_currentPositionPromiseDeferred.promise)

      _createController = function() {
        return $controller('HomeCtrl', {
          geolocation: _geolocationService
        });
      };
    });
  });

  describe('getForecast', function() {
    it('retrieves the current forecast for custom position', function() {
      //setup mocks
      spyOn(_openWeatherMapService, 'queryForecastByGeographicLocation').and.returnValue({'$promise': _weatherPromiseDeferred.promise})

      // initiate controller. This will execute tested method
      let ctrl = _createController();

      // resolve promises
      _currentPositionPromiseDeferred.resolve(
        { 
          coords: 
          {
            latitude:  51.50853,
            longitude: -0.12574
          }
        });
      _weatherPromiseDeferred.resolve({'testValue': 123})

      // get promises fulfilled
      _$rootScope.$apply();

      // check test results
      expect(_openWeatherMapService.queryForecastByGeographicLocation).toHaveBeenCalled();
      expect(_geolocationService.getCurrentPosition).toHaveBeenCalled();
      expect(ctrl.forecast).not.toBe(undefined);
      expect(ctrl.forecast['testValue']).toBe(123)
    });

    it('retrieves the current forecast for London', function() {
      //setup mocks
      spyOn(_openWeatherMapService, 'queryForecastDaily').and.returnValue({'$promise': _weatherPromiseDeferred.promise})
      
      // initiate controller. This will execute tested method
      let ctrl = _createController();

      _currentPositionPromiseDeferred.reject({});
      _weatherPromiseDeferred.resolve({'testValue': 123})

      // get promises fulfilled
      _$rootScope.$apply();

      // check test results

      expect(_openWeatherMapService.queryForecastDaily).toHaveBeenCalled();
      expect(_geolocationService.getCurrentPosition).toHaveBeenCalled();
      expect(ctrl.forecast).not.toBe(undefined);
      expect(ctrl.forecast['testValue']).toBe(123)
    });
  });



});