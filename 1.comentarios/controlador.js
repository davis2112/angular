var app = angular.module("angularTest",[]);

app.controller("controladorComentarios",function($scope){
  $scope.nuevoComentario = {};
  $scope.comentarios = [];

  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
});
