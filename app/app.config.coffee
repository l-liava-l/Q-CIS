'use strict'

App = angular.module('app', [
  'angularFileUpload'
  'ui.router'
]).run () ->

App.config [
    '$stateProvider'
    '$urlRouterProvider'
    '$httpProvider'
    ($stateProvider, $urlRouterProvider, $httpProvider) ->

      headers  = $httpProvider.defaults.headers

      headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

      $httpProvider.defaults.transformRequest.unshift (data) ->
        if angular.isObject(data) then angular.toQueryString(data) else data


      $stateProvider
      .state('main', {
        url: "/main"
        templateUrl: 'pages/main/main.html'
        controller: 'MainCtrl'
      })

      $urlRouterProvider.otherwise "/main"
]

