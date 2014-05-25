var app = angular.module('CC');

app.directive('userEditor', function(socket, initiateEditor, $modal){
  return {
    restrict: 'E',
    template: "<p id='uEditor'></p>",
    link: function(scope, ele, attr) {  
      var editor = ace.edit("uEditor");
      editor.setTheme("ace/theme/eclipse");
      editor.setFontSize(19);

      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setMode("ace/mode/javascript");

      editor.on('change', function(){
        var currentText = session.getValue();
        socket.emit('userChangedEditor', currentText);
      });

      editor.on('focus', function(){
        scope.$apply(scope.highlightSubmit = true);
      })

      scope.editor = editor;

      scope.returnEditorText = function(){
        return session.getValue();
      }

      socket.on('waitingForOpponent', function(){
        scope.waitingForOpponentModal = $modal.open({
          templateUrl: 'js/components/modals/waitingForOpponent.html',
          controller: 'mainCtrl'
        });
      });

      socket.on('initializeQuestion', function(randomNum){
        scope.highlightSubmit = false;
        initiateEditor.setUpEditor(randomNum, scope, session);
      });

      socket.on('cleanEditor', function(){
        initiateEditor.clearEditor(scope, session);
      });
    }
  }
});