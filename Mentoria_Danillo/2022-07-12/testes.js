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


function escada(palavra){
  let entrada = palavra

  for (let i = 0; i < entrada.length; i++) {
    if (entrada )
      //let remove = retorno.substring(0, entrada.length -1)
      console.log(remove)
  }
}

console.log(escada("Fulano"))



/*function replaceString(oldS, newS, fullS) {
    // Substitui oldS por newS na string fullS
      for (var i = 0; i < fullS.length; i++) {
        if (fullS.substring(i, i + oldS.length) == oldS) {
         fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
        }
      }
      return fullS;
    }
    
    console.log(replaceString("World", "Web", "Brave New World"))
    */

/*


    function test() {
      let listaDeMercado = [
        "f",
        "u",
        "l",
        "a",
        "n",
        "o",
      ];
      console.log(listaDeMercado.join(''))
      
      indice = listaDeMercado.lastIndexOf();
      listaDeMercado.splice(indice, 1);
      
      console.log(listaDeMercado.join(''));
      
      
    }
    
    test();
  
    */


/*
function removeLastLetter(word){
  for (let i = 0; i < word.length; i++) {
    let fullWord = word;
    console.log(fullWord)

    if(fullWord){
    indice = fullWord.lastIndexOf()
    remove = indice.splice(indice, 1);
    }
  }
}

*/

function janaina(parametro){

  let array = parametro
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    console.log(element)
  }
/*
  console.log(parametro.join(''))
  parametro.pop()
  console.log(parametro.join(''))
  parametro.pop()
  console.log(parametro.join(''))
  parametro.pop()
  console.log(parametro.join(''))
  parametro.pop()
  console.log(parametro.join(''))
  parametro.pop()
  console.log(parametro.join(''))*/
}

console.log(janaina("janaina"))
