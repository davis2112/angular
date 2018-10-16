var app = angular.module("angularLista",["LocalStorageModule"]);

app.controller("controladorLista",function($scope,localStorageService){
  $scope.todo = [];
  $scope.addTarea = function(){
    $scope.todo.push($scope.nuevaTarea);
    $scope.nuevaTarea = {};
  }
});
