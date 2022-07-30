
function fulano(palavra) {
    let string = palavra;
    let array = string.split('');
    let includes = array.push(' ');

    for (let i = 0; i <= array.length+4 ; i++){
        
        let indice = array.lastIndexOf();
        let remove = array.splice(indice);
        console.log(array.join(""));
    }
} 

console.log(fulano("FULANO"));
  