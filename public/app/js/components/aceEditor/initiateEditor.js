var app = angular.module('CC');

app.service('initiateEditor', function($http, $q){
  var tempArr = [
    {question: 'This is the first question', fn: 'var firstQuestion = function(){}'},
    {question: 'This is the sec question', fn: 'var secondQuestion = function(){}'},
    {question: 'This is the third question', fn: 'var thirdQ = function(){}'},
    {question: 'This is the fourth question', fn: 'var fourthQ = function(){}'}
  ];

  var getRandomInt = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getInitialQuestion = function(data){
    var randomInt = getRandomInt(0, data.length);
    return data[randomInt];
  }

  this.getRandomQuestion = function(){
    var randomInt = getRandomInt(0, data.length -1);
    return tempArr[randomInt]; //delete this line once data is real
    return data[randomInt];
  };

  this.makeRequest = function(){
    var d = $q.defer();
    $http({
      method: 'GET',
      url: '#'
    }).success(function(data){
      //change and remove tempArr once actual data is retrieved.
      var randomQuestion = getInitialQuestion(tempArr);
      d.resolve(randomQuestion);
    }).error(function(){
      d.resolve('There was an error in initiateEditor');
    });
    return d.promise;
  }
})