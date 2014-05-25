var app = angular.module('CC');

app.service('initiateEditor', function($http, $q){
  var questions = {};

  this.setQuestionData = function(data){
    questions.data = data;
  };

  this.getRandomQuestion = function(randomInt){
    return questions.data[randomInt];
  };

  this.getQuestions = function(){
    var d = $q.defer();
    $http({
      method: 'GET',
      url: '/api/questions'
    }).success(function(data){
      console.log('The data is', data);
      d.resolve(data);
    }).error(function(){
      d.error('There was an error retrieving the questions');
    });
    return d.promise;
  };

  this.setUpEditor = function(randomNum, scope, session){
    var questionData = this.getRandomQuestion(randomNum);
    scope.data.question = questionData.question;
    session.setValue(questionData.fn);
  };

  this.clearEditor = function(scope, session){
    scope.data = {};
    session.setValue('');
  }
});