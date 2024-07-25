

/*
Problem statement
Given an array ‘arr’ of size ‘n’ find the largest element in the array.

Example:

Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]
Output: 5
Explanation: From the array {1, 2, 3, 4, 5}, the largest element is 5.
*/

/*
Sample input 1:
6
4 7 8 6 7 6 
Sample output 1:
8
Explanation of sample input 1:
The answer is 8.
From {4 7 8 6 7 6}, 8 is the largest element.
Sample input 2:
8
5 9 3 4 8 4 3 10 
Sample output 2:
10
*/

const largestNumber = (arr) =>{
    let largest = 0
    for (let i = 0; i < arr.length; i++) {
        if(largest<arr[i]){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNumber([5,9,3,4,8,4,3,10]))