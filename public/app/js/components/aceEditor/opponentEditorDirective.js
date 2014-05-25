var app = angular.module('CC');

app.directive('opponentEditor', function(socket) {
  return {
    restrict: 'E',
    template: "<p id='oEditor' class='oEditor'></p>",
    link: function(scope, ele, attr) {  
      var editor = ace.edit("oEditor");
      editor.setTheme("ace/theme/eclipse");
      editor.setReadOnly(true);
      editor.renderer.setShowGutter(false);
      editor.setFontSize(15);

      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setMode("ace/mode/javascript");

      editor.on('change', function(changeObj){
        // var currentText = session.getValue();
      });

      editor.on('focus', function(){
        
      });

      socket.on('updateText', function (newTxt) {
        session.setValue(newTxt);
      });

      scope.oEditor = editor;

      socket.on('initializeQuestion', function(data){
        scope.data.question = data.question;
        session.setValue(data.fn);
      });
    }
  }
});