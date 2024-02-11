/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.
Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.
There are many ways to accomplish this task but here's a simple algorithm:
1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`
Examples:
sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []

Input: arr
Output: arr of sorted numbers

1. set a base case that checks whether the arrays length is equal to zero
2. make a variable for a new array
3. make a variable that will hold the smallest number
4. write an if statement that will compare the value of the array at the first index to 
***********************************************************************/

function sort(nums, sorted = []) {
  // Your code here
  let smallestNum = Infinity;
  if (!nums.length) return sorted;

  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];

    if (ele < smallestNum) {
      smallestNum = ele;
    }
  }
  let index = nums.indexOf(smallestNum);
  sorted.push(smallestNum);
  nums.splice(index, 1);

  return sort(nums, sorted);
}

console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
