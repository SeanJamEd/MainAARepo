/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.
If there are no vowels at all, return an empty string "".
Your function should also accept a `counter` parameter that will be an empty
object by default.
Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.
Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)
// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)
// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)
// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)
// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)
// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)
// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)
// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)
// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'
Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.
***********************************************************************/

// Your code here 
let vowels = ['a', 'e', 'i', 'o', 'u']

function mostFrequentVowel(words, counter = {}){
	if (words.length === 0){
        let highestVowel = '';
        let preVowel = '';
        let preCount = -Infinity;
        let highestCount = -Infinity;

        for (let key in counter){
            let num = counter[key]
            
            if (num > highestCount){
                highestCount = num
                highestVowel = key
                
            }

            // this just returns both the highest occuring vowels if there is a tie
            // if (preCount === highestCount && preCount === num){
            //     return `${key} and ${preVowel}`
            // }
            else {
                preCount = num
                preVowel = key
            }
        }
        return highestVowel
    }

    let curr = words[0]

    for (let i = 0; i < curr.length; i++){
        let letter = curr[i]
        if (vowels.includes(letter)){
            if (counter[letter] === undefined){
                counter[letter] = 1
            }
            else {
                counter[letter]++
            }
        }
    }
    return mostFrequentVowel(words.slice(1), counter)
}



Examples:
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
