 //Exercicio de Casa
  //fazer o splice na unha
  //fazer uma substituição sem usar o splice, sem deletar um elemento
  //Usar FOR e IF

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

  let i

  for (let i = 0; i < listaDeMercado.length; i++) {
      if(listaDeMercado[i] == "abobora"){
        listaDeMercado[i] = "batata" // essa linha aqui
          console.log(listaDeMercado)
      }
}   