

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

/*
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

// native Solution

/*
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
*/

// Refactor Solution

function sumZero(arr){
let left = 0
let right = arr.length - 1 ;
while (left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0)return [arr[left],arr[right]]
    if(sum > 0){
        right-- ;
    }
    if(sum < 0){
        left++
    }
}
}
// console.log(sumZero([-3,-2,-1,0,1,2,3]))

// Count Unique Values
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

/*
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

function countUniqueValues(arr){
    if(arr.length <= 0) return 0
    let count = 1;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[j]){
            count++;
            j = i ; 
        }
    }
    return count
}
console.log(countUniqueValues([-2,-1,-1,0,1]));