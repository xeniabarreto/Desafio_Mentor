function palindromo(palavra){

let palindromoReverse = palavra.split('').reverse().join('');

if(palavra === palindromoReverse){
    return true
}else{
    return false
}

}

console.log(palindromo(ovo));