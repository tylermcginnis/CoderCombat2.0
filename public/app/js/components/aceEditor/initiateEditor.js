var app = angular.module('CC');

app.service('initiateEditor', function($http, $q){
  var tempArr = [
    {question: 'Have the function "reverse" take a string as the parameter and return that string after it\'s been reversed', fn: 'var reverse = function(str){\n\n}', answer: 'rewsna eht si siht'},
    {question: 'Have the function "longest" take a string as the parameter and returns the longest word in that string.', fn: 'var longest = function(str){\n\n}', answer: 'spaceship'}
  ];

  var questions = {};

  this.setQuestionData = function(data){
    questions.data = data;
  }

  this.getRandomQuestion = function(){
    var randomInt = getRandomInt(0, data.length -1);
    return tempArr[randomInt]; //delete this line once data is real
    return data[randomInt];
  };

  this.getQuestions = function(){
    var d = $q.defer();
    $http({
      method: 'GET',
      url: '#'
    }).success(function(data){
      // d.resolve(data);

      //change to data and remove tempArr once actual data is retrieved.
      d.resolve(tempArr);
    }).error(function(){
      d.error('There was an error retrieving the questions');
    });
    return d.promise;
  }
})