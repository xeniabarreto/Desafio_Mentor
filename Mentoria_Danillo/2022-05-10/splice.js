//ATIVIDADE EM AULA

function test() {
    let listaDeMercado = [
      "banana",
      "maçã",
      "coca-cola",
      "H2OH",
      "cenoura",
      "melancia",
      "mexerica",
      "bolacha",
      "abobora",
      "suco de maracuja"
    ];
  
    var indice = listaDeMercado.indexOf("abobora");
    console.log(indice);
    var substituicao = listaDeMercado.splice(indice, 1, "batata");
    console.log(listaDeMercado);
  }
  
  test();
  
  //PROXIMA AULA
  //fazer o splice na unha
  //fazer uma substituição sem usar o splice, sem deletar um elemento
  //Usar FOR e IF
  
  // listaDeMercado[XXX] = "batata";
  
  //var removed = myFish.splice(2, 0, "drum");
  //myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
  //removed é [], nenhum elemento removido
  
//ATIVIDADE PARA CASA