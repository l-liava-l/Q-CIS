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


(function() {
    angular
        .module('app')
        .controller('MainCtrl', mainCtrl);
    
    function mainCtrl() {
        var vm = this;

        vm.files = [];
        vm.show = false;

        vm.onFileSelect = onFileSelect;
        vm.showList = showList;
        vm.hideList = hideList;



        function onFileSelect($files) {
            vm.files = $files.concat(vm.files);
            ((!vm.show && vm.files.length <= 2) || vm.show) ? showList() : hideList();
        }

        function showList() {
            vm.selected = vm.files;
            vm.show = true
        }

        function hideList() {
            vm.selected = [vm.files[0], vm.files[1]];
            vm.show = false
        }

    }
})();

//# sourceMappingURL=app.js.map