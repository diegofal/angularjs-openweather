function geolocation($rootScope, $window, $q) {
  'ngInject';

  const service = {};

  service.supported = function(){
      return 'geolocation' in $window.navigator;
  }

  service.getCurrentPosition = function(options){
    var deferred = $q.defer();

    if(service.supported()) {
        $window.navigator.geolocation.getCurrentPosition(function(position){
          $rootScope.$apply(function() {
                  deferred.resolve(position);
              });
        });
    } else {
        deferred.reject({error: {
            code: 2,
            message: 'This web browser does not support HTML5 Geolocation'
        }});
    }
    return deferred.promise;
  }

  return service;
}

  geolocation.$inject = ['$rootScope', '$window', '$q'];


export default {
  name: 'geolocation',
  fn: geolocation
};
