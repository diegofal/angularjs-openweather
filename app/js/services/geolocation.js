function Geolocation($rootScope, $window, $q) {
  'ngInject';

  const service = {};

  function supported() {
      return 'geolocation' in $window.navigator;
  }

  service.getCurrentPosition = function(options){
    var deferred = $q.defer();
    if(supported()) {
        $window.navigator.geolocation.getCurrentPosition(
            function(position) {
                $rootScope.$apply(function() {
                    deferred.resolve(position);
                });
            },
            function(error) {
                $rootScope.$apply(function() {
                    deferred.reject({error: error});
                });
            }, options);
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

  Geolocation.$inject = ['$rootScope', '$window', '$q'];


export default {
  name: 'Geolocation',
  fn: Geolocation
};
