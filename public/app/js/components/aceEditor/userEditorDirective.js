var app = angular.module('CC');

app.directive('userEditor', function(socket, $rootScope){
  return {
    restrict: 'E',
    link: function(scope, ele, attr) {  
      var editor = ace.edit("uEditor");
      editor.setTheme("ace/theme/eclipse");

      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setMode("ace/mode/javascript");

      var editorText = session.getValue();

      scope.chainedPromise.then(function(){
        ele.html(scope.data.fn);
      });
    }
  }
})