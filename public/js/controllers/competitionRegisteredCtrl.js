app.controller('CompetitionRegisteredCtrl', [
  '$scope',
  '$rootScope',
  '$state',
  'auth',
  '$http',
  'competition',
  function($scope, $rootScope, $state, auth, $http, competition) {
  	$scope.competition = competition;

    $scope.unregister = function(){
	    $http.post('/competitions/'+competition._id+'/withdraw', null, {
      	headers: {Authorization: 'Bearer '+auth.getToken()}
      }).then(function(response) {
      	console.log(JSON.stringify(response.data));
      	$state.go('dash');
      }, function(error) {
      	console.log(error);
      });
    };

    $scope.submit = function() {
      $http.post('/competitions/'+competition._id+'/submit', {link: $scope.link}, {
        headers: {Authorization: 'Bearer '+auth.getToken()}
      }).then(function(response) {
        $scope.link = '';
        console.log(JSON.stringify(response.data));
      }, function(error) {
        console.log(error);
      });
    };

  }
]);
