var app = angular.module("angularAjax",[]);

app.controller("controladorAjax",function($scope,$http){
  $scope.posts = [];
  $scope.newPost = {};
  $http.get("https://jsonplaceholder.typicode.com/posts")
  .then(function(datos){
    console.log(datos);
    $scope.posts = datos.data;
  });
  $scope.addPost = function(){
    $http.post("https://jsonplaceholder.typicode.com/posts",{
      title: $scope.newPost.title,
      body: $scope.newPost.body,
      userId: 1
    })
    .then(function(data,status,headers,config){
      $scope.posts.push($scope.newPost);
      $scope.newPost = {};
    })
    .error(function(error,status,headers,config){
      console.log(error);
    });
  }
});
