(function() {
   'use strict';

   angular
       .module('app', [
       'angularFileUpload',
       'ui.router'
   ]);

   angular
        .module('app')
        .config(configuration);

   configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

   function configuration($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: 'main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm'
            });


        $urlRouterProvider.otherwise("/main")
    }

})();

