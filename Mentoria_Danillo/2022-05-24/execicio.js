let palavraOriginal = ["C", "E", "L", "U", "L", "A", "R"];

// Substituir as seguintes letras por outros caracteres
// E => 3
// L => 1
// A => 4
// De forma que o resultado seja ["C", "3", "1", "U", "1", 4", "R"]

// console.log(palavraOriginal.join().replaceAll(',', ""));

// console.log(palavraOriginal.join(""));

// console.log(palavraOriginal.join().replaceAll('E', "3").replaceAll('L', '1').replaceAll('A', '4'));

// for (let i = 0; i < palavraOriginal.length; i++) {
//   if(palavraOriginal[i] == "E"){
//     palavraOriginal[i] = "3"
//   }
//   if(palavraOriginal[i] == "L"){
//     palavraOriginal[i] = "1"
//   }
//   if(palavraOriginal[i] == "A"){
//     palavraOriginal[i] = "4"
//   }
// }

let objetoDicionario = {
  "E": "3",
  "L": "1",
  "A": "4",
  "C": "xixi"
}

// console.log(objetoDicionario["E"]) 

for (let i = 0; i < palavraOriginal.length; i++) { // 6
  let letraAtual = palavraOriginal[i]; // R
  let novaLetra = objetoDicionario[letraAtual] // undefined

  if(novaLetra !== undefined){ // false
    palavraOriginal[i] = novaLetra
    // palavraOriginal na posição 1("e") = atribui para 3
    //quando false não executa
  }
}

console.log(palavraOriginal.join(""))

// LIÇÃO DE CASA, LER E COMPREENDER MELHOR O CODIGO ACIMA
// USAR A ATIVIDADE DA SEMANA 05 HANNAH COM CLASSES PARA CONVERTER O RNA
