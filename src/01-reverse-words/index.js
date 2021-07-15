/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: O(n)
// Explain: 
// O(n) for split, reverse and join behind the scenes

module.exports = function reverseWordsInSentence(input) {
  var input = input.split(" ");

  var reversedString = ""

  for(var i = 0; i<input.length; i++){
    reversedString += input[i].split("").reverse().join("");
    if(i!=input.length-1){
      reversedString += " "
    }
  }

  return reversedString
};
