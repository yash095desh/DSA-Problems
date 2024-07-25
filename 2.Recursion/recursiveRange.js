

//recursiveRange
//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

const recursiveRange = (num) =>{
    if(num === 1)return 1
    return num + recursiveRange(--num)
}
console.log(recursiveRange(10))