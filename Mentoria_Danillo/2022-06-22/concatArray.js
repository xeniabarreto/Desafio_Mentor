// Dado um array de inteiros, crie uma funcao que duplica o array retornando um novo array
// Por exemplo, dado o array [1, 2, 3], retornar um novo array com os elementos [1, 2, 3, 1, 2, 3]

function duplicar(array) {
    // let numbersCopy = array.map((x) => x); // X * 2 vai mulpliticar cada elemento por 2
    let numbersCopy = clone(array);
    //x é cada elemento do array e esta retornando o proprio elemento(o x)
    //ele faz um for
    //o map retorna um array
    // let dobleArr = array.concat(numbersCopy);
    let dobleArr = concat(array, numbersCopy);
  
    return dobleArr;
  }
  
  console.log(duplicar([1, 2, 3])); // retornar [1, 2, 3, 2, 4, 6]
  console.log(duplicar([3, 2, 1])); // retornar [3, 2, 1, 3, 2, 1]
  
  console.log(duplicar([1, 2, 55, 13, 27]));
  
  //=====================================================================
  
  // O QUE MAP FAZ:
  
  function clone(array) {
    let novoArrayClonado = [];
    for (let i = 0; i < array.length; i++) {
      let x = array[i];
      novoArrayClonado.push(x);
    }
  
    return novoArrayClonado;
  }
  
  // homework
  
  function concat(array1, array2) {
    return []; // vc vai substituir pelo array concatenado
  }
  