/*

Write a recursive function called mostFrequentVowel(words, counter) which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.
If there are no vowels at all, return an empty string "".
Your function should also accept a counter parameter that will be an empty
object by default.
Each recursive step should count the vowels in the last string in the array
and add them to the counter. Return the vowel with the greatest count in
the counter object.
Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

*/


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
            if (preCount === highestCount && preCount === num){
                return `${key} and ${preVowel}`
            }
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