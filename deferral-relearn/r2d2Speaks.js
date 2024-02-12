/* 

Write a function r2d2Speaks that takes in a series of
0s and 1s. The function should console.log a 'beep' for
a 0 followed by a pause of 400 ms and a 'boop' for a 1
followed by 800 ms.

*/

// your code here
// let r2d2Speaks = (code) => {
//     if (code.length === 0)return;

//     if (code[0] === 0){
//         setTimeout(() => {
//             console.log('beep')
//             r2d2Speaks(code.slice(1))
//         },400)
//     }

//     if (code[0] === 1){
//         setTimeout(() => {
//             console.log('boop')
//             r2d2Speaks(code.slice(1))
//         },800)
//     }
// }


// // Example:
// let code = [0, 1, 1, 0];
// r2d2Speaks(code);
    // print 'beep'
    // pause for 400ms
    // print 'boop'
    // pause for 800ms
    // print 'boop'
    // pause for 800ms
    // print 'beep'
    // pause for 400ms


    /* Define a function called sumArray that takes 
    in an array of numbers and
    returns the total sum of all the numbers */

function sumArray(arr, i = 0, sum = 0){
    // let i = 0
    // let sum = 0;
    if (i === arr.length)return sum

    if (i < arr.length){
        sum += arr[i]
        i++
    }
    return sumArray(arr, i, sum)
}

console.log(sumArray([1, 2]));        // => 3
console.log(sumArray([5, 6, 4]));     // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
console.log(sumArray([]));            // => 0