/*
function fulano(palavra) {
    let string = palavra;
    let array = string.split('');

    let tamanhoOriginal = array.length // mantendo o tamanho array, mesmo depois de passar o split
    
            console.log(palavra)

    for (let i = 0; i <= tamanhoOriginal; i++){

    
        let indice = array.lastIndexOf();
        array.splice(indice);
        console.log(array.join(""));
    }


} 
console.log(fulano("FULANO"));



//exemplo RECURSÃO

function fulano(palavra, controlador) {
    if (controlador === 2) {
      console.log(palavra);
    } else {
      fulano(palavra, controlador + 1);
    }
  }
  
  fulano("QUALQUER COISA", 0);


  //solucão COM RECURSÃO - quando chama uma a função dentro dela mesmo.

  function fulano(palavra) {
    if (palavra !== "") console.log(palavra);
  
    if (palavra.length > 0) {
      fulano(palavra.slice(0, palavra.length - 1));
    }
  }
  
  fulano("JABUTICABA");
*/
/*

  let array = [1,2,3,4,5,6,7,8,9,10]; 
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
  }
*/
/*
function imprimeArray(palavra){
  let qualquerCoisa = palavra.split('')
  

  
  console.log(qualquerCoisa[0])
  qualquerCoisa - 1




}
console.log(imprimeArray("bola"))
 


function teste(palavra){
  let qualquerCoisa = palavra.split('')
  console.log(qualquerCoisa);
  teste(qualquerCoisa+1);
}

console.log(teste("BOLA"))

*/




//Exemplo

function somatorio(x){
 if(x<=1)
  return 1;

 else
  return x + somatorio(x-1) ;
}
console.log(somatorio(1))



function test(array, controle) {
  if(controle <= array.length - 1) {
    console.log(array[controle])

    test(array, controle + 1)
  }
}

test([2, 3, 4], 0);



function test2(array) {
  if(array.length !== 0) {
    console.log(array[0])

    test2(array.slice(1, array.length))
  }
}

test2([2, 3, 4]);

// recursão sempre com validação/ condicional que defina fim do looping