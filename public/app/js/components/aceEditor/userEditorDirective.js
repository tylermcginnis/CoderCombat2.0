var app = angular.module('CC');

app.directive('userEditor', function(socket){
  return {
    restrict: 'E',
    template: "<p id='uEditor'></p>",
    link: function(scope, ele, attr) {  
      var editor = ace.edit("uEditor");
      editor.setTheme("ace/theme/eclipse");

      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setMode("ace/mode/javascript");

      editor.on('change', function(){
        var currentText = session.getValue();
        socket.emit('userChangedEditor', currentText);
      });

      scope.editor = editor;

      scope.chainedPromise.then(function(){
        session.setValue(scope.data.fn);
      });
    }
  }
});