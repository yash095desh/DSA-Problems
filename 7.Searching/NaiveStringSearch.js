
function naiveSearch (str,word){
let counter = 0;
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < word.length ; j++) {  
       if(str[i + j] !== word[j]) break;
        if(j === word.length - 1) counter++;
    }   
}
return counter
}

console.log(nativeSearch('wowomgzomgkomg','omg'));
