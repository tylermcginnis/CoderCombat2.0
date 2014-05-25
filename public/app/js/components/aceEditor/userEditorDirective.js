var app = angular.module('CC');

app.directive('userEditor', function(socket, initiateEditor){
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

      scope.editor = editor;

      socket.on('initializeQuestion', function(randomNum){
        initiateEditor.setUpEditor(randomNum, scope, session);
      });
    }
  }
});