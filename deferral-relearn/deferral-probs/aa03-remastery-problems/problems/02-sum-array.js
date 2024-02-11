/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
Examples:
sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/


function sumArray(arr, i = 0, sum = 0) {
  // Your code here 
    // let i = 0
    // let sum = 0;
    if (i === arr.length)return sum

    if (i < arr.length){
        sum += arr[i]
        i++
    }
    return sumArray(arr, i, sum)
  }

  sumArray([1, 2, 3]); //  6
  sumArray([0, 1, -3]); //  -2
  sumArray([1, 2, 3, 4, 5]); // 15


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
