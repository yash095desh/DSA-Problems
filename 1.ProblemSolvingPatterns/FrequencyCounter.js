// Q1
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// native solution 

/*
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
*/

// Refactored Solution using frequency counter

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    frequencyCounter1 = {}
    frequencyCounter2 = {}

    arr1.forEach(element => {
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1
    });
    arr2.forEach(element => {
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1
    });

    for (const key in frequencyCounter1) {
            if(!frequencyCounter2[key ** 2]){
                return false
            }

            if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]){
                return false
            }

    }
    return true
}

//console.log(same([1,2,3,], [4,1,9])) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


//Q 2 ANNAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true


 function validAnagram(str1,str2){

    if(str1.length !== str2.length)return false

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for(i = 0 ; i < str1.length;i++){
        let char = str1[i]
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for(i = 0 ; i < str2.length;i++){
        let char = str2[i]
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    for(const key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }

    return true
}

console.log(validAnagram('', ''))