var app = angular.module('CC', []);

app.run(function(initiateEditor){
  initiateEditor.getQuestions()
    .then(function(data){
      initiateEditor.setQuestionData(data);
    }, function(data){
      console.log(data);
    })
})

