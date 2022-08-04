
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
