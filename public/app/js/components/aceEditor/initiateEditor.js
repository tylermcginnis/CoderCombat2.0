var app = angular.module('CC');

app.service('initiateEditor', function($http, $q){
  var data = [{question: 'no show', fn: 'no show too'}];
  var tempArr = [
    {question: 'This is the first question', fn: 'var firstQuestion = function(){}'},
    {question: 'This is the sec question', fn: 'var secondQuestion = function(){}'},
    {question: 'This is the third question', fn: 'var thirdQ = function(){}'},
    {question: 'This is the fourth question', fn: 'var fourthQ = function(){}'}
  ];

  var getRandomInt = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.getRandomQuestion = function(){
    var randomInt = getRandomInt(0, data.length -1);
    return data[randomInt];
  };

  var getInitialQuestion = function(data){
    var randomInt = getRandomInt(0, data.length);
    return data[randomInt];
  }

  this.makeRequest = function(){
    var d = $q.defer();
    $http({
      method: 'GET',
      url: '#'
    }).success(function(data){
      //eventually change tempArr to data
      d.resolve(tempArr[0]);
    }).error(function(){
      //eventually change this too
      d.resolve(tempArr[1])
    });
    return d.promise;
  }
})