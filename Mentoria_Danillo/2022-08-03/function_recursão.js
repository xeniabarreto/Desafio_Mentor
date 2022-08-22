// Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante.
// Por extensão, palíndromo é qualquer série de elementos com simetria linear, ou seja,
// que apresenta a mesma sequência de unidades nos dois sentidos.

//CRIAR UMA FUNÇÃO COM RECURSÃO


function palindromo(palavra){
  for (let i = 0; i < palavra.length; i++) {
      let frente = palavra[i]
      let tras = palavra[palavra.length-1 -i]

      if(frente != tras){
          return false
      }
      return true //depois que acaba o for e nao retornou false, colocamos o true
  }
}
//console.log(palindromo("radar"));



function isPalindrome2(word) {
  let numOfLetters = word.length,
    lastCharIndex = numOfLetters - 1;

  if (numOfLetters === 0 || numOfLetters === 1) {
    return true;
  }

  if (word[0] === word[lastCharIndex]) {
    word = word.substr(0, lastCharIndex).substr(1); //substr retorna uma parte da string
    return isPalindrome2(word);
  }

  return false;
}

console.log(isPalindrome2("radar"))
console.log(isPalindrome2("amor"))


/**
 * const str = 'Mozilla';
console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
 */