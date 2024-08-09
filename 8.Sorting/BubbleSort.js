
// Bubble Sort Implementation

function swap(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp
    return arr
}

function bubbleSort(arr){
    let noSwap ;
    for(let i = arr.length - 1 ; i > 0 ; i-- ){
        noSwap = true
       for(let j = 0 ; j < i ;j++){
            if(arr[j] > arr[j+1]){
                arr = swap(arr,j,j+1)
                noSwap = false
            }
        }
        if(noSwap)break;
    }
    return arr
}

console.log(bubbleSort([8,1,2,3,4,5,6]))