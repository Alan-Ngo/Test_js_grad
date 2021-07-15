// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: O(1)
// Explain:
//Only addition is used which is O(1) to calculate the addition of numbers

module.exports = function createBase(integer) {
  function add(v){
    return integer + v;
  }

  return add;
};