App.controller 'MainCtrl', ($scope) ->

  $scope.model = model =
    files: []
    user: 'Юлия'

  $scope.onFileSelect = ($files) ->
    $scope.model.files = model.files.concat($files)





