//MENTOR ALLAN
/*
arr = [1,4,3,2]
console.log(arr)
arr.reverse()
console.log(arr)*/

// Desafio
https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true

reverseArray = () => {
    
    let array = [1,4,3,2];

    for (let i = 1; i < array.length; i++){
        let previousNumber = array[i-1];
        let currentNumber = array[i]

        if(previousNumber != 0 && currentNumber != 0){
            array.splice(i, 0 , " ")
            i++
        }
    }

    array.reverse()    
    return array.join('')

}

console.log(reverseArray())