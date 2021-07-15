/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: O(n^2)
// Explain: Bubble sort used to sort array, requires two for loops

module.exports = function sortArray(arr) {
  if(arr.length == 0){
    return []
  }

  if(!Array.isArray(arr)){
    throw new TypeError("Not a number")
  }else{
    for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] != "number" || !Number.isInteger(arr[i])){
        console.log("thwewewe")
        throw new TypeError("Not a number2")
      }    
    }
  }

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length-1; j++){
      if(arr[j]>arr[j+1]){
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  return arr
};
