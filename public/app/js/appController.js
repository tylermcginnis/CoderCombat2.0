var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket, $timeout, initiateEditor){
  $scope.data = {};

  $scope.checkAnswer = function(){
    if(initiateEditor.validateCode($scope.returnEditorText())){
      socket.emit('showWinnerModal');
      socket.emit('clearAllEditors');
      socket.emit('showLoserModal');
      $timeout(function(){
        socket.emit('initializeNewQuestion');
        $scope.winnerModal && $scope.winnerModal.close();
        socket.emit('closeLoserModal');
      }, 5000);
    } else {
      alert('wrong')
    }
  };

  socket.on('joinedRoom', function(obj){
    console.log('someone joined the room');
    $scope.waitingForOpponentModal && $scope.waitingForOpponentModal.close();
  });

  socket.on('leftRoom', function(obj){
    console.log('someone left the room')
  });
});