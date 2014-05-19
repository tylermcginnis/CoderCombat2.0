var app = angular.module('CC');

app.directive('opponentEditor', function(socket) {
  return {
    restrict: 'E',
    link: function(scope, ele, attrs) {   
      var editor = ace.edit("oEditor");
      editor.setTheme("ace/theme/eclipse");
      editor.setReadOnly(true);

      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setMode("ace/mode/javascript");

      var editorText = session.getValue();

      scope.chainedPromise.then(function(){
        ele.html(scope.data.fn);
      });
    }
  }
});