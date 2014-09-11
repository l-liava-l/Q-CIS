'use strict';
var App;

App = angular.module('app', ['angularFileUpload', 'ui.router']).run(function() {});

App.config([
  '$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    var headers;
    headers = $httpProvider.defaults.headers;
    headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest.unshift(function(data) {
      if (angular.isObject(data)) {
        return angular.toQueryString(data);
      } else {
        return data;
      }
    });
    $stateProvider.state('main', {
      url: "/main",
      templateUrl: 'pages/main/main.html',
      controller: 'MainCtrl'
    });
    return $urlRouterProvider.otherwise("/main");
  }
]);
;App.controller('MainCtrl', function($scope) {
  var model;
  $scope.model = model = {
    files: [],
    user: 'Юлия'
  };
  return $scope.onFileSelect = function($files) {
    return $scope.model.files = model.files.concat($files);
  };
});
;
//# sourceMappingURL=app.js.map