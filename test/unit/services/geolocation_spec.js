describe('Unit: GeolocationService', function() {

  let _geolocationService, _$rootScope, _$window, _$q;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject((geolocation, $q, $window, $rootScope) => {
      _geolocationService = geolocation;
      _$rootScope = $rootScope;
      _$window = $window;
      _$q = $q;
    });
  });

  it('when browser has geolocation active, it should return the position', function() {

  	// setup mocks
  	spyOn(_geolocationService, 'supported').and.returnValue(true);
  	spyOn(_$window.navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
        var position = {
        	coords: 
	          {
	            latitude:  51.50853,
	            longitude: -0.12574
	          }
	    };

        arguments[0](position);
      });


  	// execute tested method
    _geolocationService.getCurrentPosition()
    	.then(
    		function(result){
    			// check test results
    			expect(result.coords).not.toBe(undefined);
    			expect(result.coords.latitude).toBe(51.50853);
    			expect(result.coords.longitude).toBe(-0.12574);
    		});

  	_$rootScope.$apply();
  });

  it('when browser has geolocation inactive, it should return an error', function() {
  	// setup mocks
  	spyOn(_geolocationService, 'supported').and.returnValue(false);


  	// execute tested method
    _geolocationService.getCurrentPosition()
    	.then(
    		null, 
    		function(result){
    			// check test results
    			expect(result.error.code).toBe(2);
    		});

      _$rootScope.$apply();
  });
});
