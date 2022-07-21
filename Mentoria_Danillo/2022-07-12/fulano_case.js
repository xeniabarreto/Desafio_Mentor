// Escadinha. Crie uma função que receba uma String e escreva a String em forma de escadinha.
// Por examplo, caso a função receba a palavra FULANO, o resultado retornado é o seguinte:

// FULANO
// FULAN
// FULA
// FUL
// FU
// F

//PSEUDOCODIGO
//transformar a palavra de entrada em array
//percorrer o array com for 
//verificar medoto para excluir os index


/*function escadinha(fulano){

    for(let i = 0; i >= fulano.leght; i++){
      let element = fulano[i];
      console.log(element)
    }
    
  }
  
  
  
  console.log(escadinha("fulano"))



   */
 

/*
staircase = () => {
  const char = "fulano";

  for (let i = 1; i < 7; ++i) {
      spaces = "";
      spaces = spaces + "".repeat(6 - i);
      console.log("Spaces" , spaces.length);
      console.log("Hastag", i)
      console.log(spaces, char.repeat(i));
  }
}

staircase();*/


function fulano(array) {

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if(element.lastIndexOf() < 0)
    console.log(element)
  }
}

console.log(fulano("fulano"))
