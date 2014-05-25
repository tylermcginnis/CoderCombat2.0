var questionData = [
  {
    question: 'Have the function "reverse" take a string as the parameter and return that string after it\'s been reversed',
    fn: 'var reverse = function(str){\n\n}',
    answer: 'rewsna eht si siht'
  },
  {
    question: 'Have the function "longest" take a string as the parameter and returns the longest word in that string.',
    fn: 'var longest = function(str){\n\n}',
    answer: 'spaceship'
  },
  {
    question: 'Have the function "dyslexicYoda" take a string as the parameter and return that string after you reverse the order of the words. ie "I enjoy eating cold meatballs" becomes "meatballs cold eating enjoy I"',
    fn: 'var dyslexicYoda = function(str){\n\n}',
    answer: 'toys his enjoys Leo'
  },
  {
    question: 'Have the function "vowelCount" take a string and return how many vowels are in that string',
    fn: 'var vowelCount = function(str){\n\n}',
    answer: 9
  },
  {
    question: 'Have the function "palindrome" take a string and return true if that string is a palindrome (written the same forward and backwards)',
    fn: 'var palindrome = function(str){\n\n}',
    answer: true
  },
  {
    question: 'Have the function "titleMaker" take a string and return that string after capitalizing the first letter in every word.',
    fn: 'var titleMaker = function(str){\n\n}',
    answer: 'Peter Piper Picked Peppers and Run Rocked Rhymes'
  }
];

module.exports.getQuestionData = function(){
  return questionData;
}