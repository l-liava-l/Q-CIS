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
    show: false
  };
  $scope.onFileSelect = function($files) {
    model.files = $files.concat(model.files);
    if ((!model.show && model.files.length <= 2) || model.show) {
      return $scope.showList();
    } else {
      return $scope.hideList();
    }
  };
  $scope.showList = function() {
    model.selected = model.files;
    return model.show = true;
  };
  return $scope.hideList = function() {
    model.selected = [model.files[0], model.files[1]];
    return model.show = false;
  };
});
;
//# sourceMappingURL=app.js.map