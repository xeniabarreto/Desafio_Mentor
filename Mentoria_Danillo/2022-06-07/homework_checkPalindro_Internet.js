
/**
 * é só ir verificando o primeiro com o último, o segundo com o penúltimo, e assim por diante até chegar no meio, por isso só precisa ir até a metade. Qualquer um par que fure a condição já garante que não é um palíndromo e nem precisa continuar, somente será um palíndromo se passar por todas sem falhar.
 */


function checkPalindrome(str) {     
    for(var i = 0; i < str.length / 2; i++) //pegando o tamanho total da string e verificando ate metade dela
        if (str[i] != str[str.length-1 - i]){ //se a palavra x for diferente de x, return false (o -i e pra retirar o restante da palavra que o for ja percorreu)
            return false
        };
        return true;
}

console.log(checkPalindrome("radar"));
console.log(checkPalindrome("reviver"));
console.log(checkPalindrome("palindromo"));