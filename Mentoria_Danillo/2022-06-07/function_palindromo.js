// Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante.
// Por extensão, palíndromo é qualquer série de elementos com simetria linear, ou seja,
// que apresenta a mesma sequência de unidades nos dois sentidos.

function palindromo(palavra) {
    //transformar string num array
    JSON.parse(palavra)
    //fazer for para verificar cada letra da palavra
    for (let i = 0; i <= palavra.length; i++) {
      const element = palavra[i];
      
    }
    //pseudocodigo
    //ler palavra de frente para traz
    //ler a palavra de traz para frente
    //usar condicionais IF/ELSE
    //se as palavras forem diferentes false
    //se iguais retorna true

    return true;
  }
  
  // console.log(palindromo("radar"));
  // console.log(palindromo("palavra"));
  // console.log(palindromo("ovo"));
  // console.log(palindromo("omissíssimo"));
  // console.log(palindromo("mamam"));
  
  ["r", "a", "d", "a", "r"];