var app = angular.module('CC', []);

app.run(function(initiateEditor){
  initiateEditor.getQuestions()
    .then(function(data){
      initiateEditor.setQuestionData(data);
    }, function(){
      console.log('There was an error in .run');
    })
})

