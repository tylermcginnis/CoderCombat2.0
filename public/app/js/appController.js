var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket){
  
  $scope.userEditorLoaded = function(userEditor) {
    var session = userEditor.getSession();
    session.setValue('The function goes here');
      userEditor.on('change', function(){
        var newVal = session.getValue();
        console.log(newVal);
      });
  };

  $scope.opponentEditorLoaded = function(opponentEditor){
    opponentEditor.setReadOnly(true);
  }


  socket.on('joinedRoom', function(obj){
    console.log(obj.text)
    alert("Someone joined the room!");
  });

  socket.on('leftRoom', function(obj){
    console.log(obj.text);
    alert("Someone left the room!");
  });
})