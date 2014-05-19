var app = angular.module('CC');

app.directive('opponentEditor', function(socket) {
  return {
    restrict: 'E',
    template: "<p id='oEditor' class='oEditor'></p>",
    link: function(scope, ele, attr) {  
      var editor = ace.edit("oEditor");
      var userEditor = ace.edit('uEditor');
      editor.setTheme("ace/theme/eclipse");
      editor.setReadOnly(true);

      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setMode("ace/mode/javascript");

      editor.on('change', function(changeObj){
        var currentText = session.getValue();
      });

      editor.on('focus', function(){
        userEditor.focus();
        alert('No one likes a cheater');
        editor.clearSelection();
        editor.moveCursorTo(5,10);
        userEditor.focus();
      });

      scope.oEditor = editor;

      scope.chainedPromise.then(function(){
        session.setValue(scope.data.fn);
      });
    }
  }
});