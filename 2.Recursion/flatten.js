

//flatten
//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


const flatten = (arr) =>{
    let result = []
    arr.forEach(element => {
        if(Array.isArray(element)){
            return result = result.concat(flatten(element))
        }
        else{
            result.push(element)
        }
    });
    return result
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))