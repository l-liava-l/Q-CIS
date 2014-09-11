App.controller 'MainCtrl', ($scope) ->

  $scope.model = model =
    files: []
    show: false


  $scope.onFileSelect = ($files) ->
    model.files = $files.concat(model.files)
    if (!model.show and model.files.length <= 2) or model.show
      $scope.showList()
    else
      $scope.hideList()


  $scope.showList = ->
    model.selected = model.files
    model.show = true

  $scope.hideList = ->
    model.selected = [model.files[0], model.files[1]]
    model.show = false




