'use strict';

(function() {

   angular
       .module('app', [
       'angularFileUpload',
       'ui.router'
   ]);

   angular
        .module('app')
        .config(configuration);

   function configuration($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: 'pages/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm'
            });


        $urlRouterProvider.otherwise("/main")
    }

})();

