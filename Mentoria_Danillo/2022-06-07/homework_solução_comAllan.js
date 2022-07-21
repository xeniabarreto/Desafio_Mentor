 
 
    //Pseudocodigo
    //ler palavra de frente para traz
    //ler a palavra de traz para frente
    //usar condicionais IF/ELSE
    //se as palavras forem diferentes false
    //se iguais retorna true

function palindromo(palavra){
    for (let i = 0; i < palavra.length; i++) {
        let frente = palavra[i]
        let tras = palavra[palavra.length-1 -i]

        if(frente != tras){
            return false
        }
        return true //depois que acaba o for e nao retornou false, colocamos o true
    }
}
console.log(palindromo("radar"));


//SPLIT transformando em array
//let mercado = "Cenoura, Abacate" 
//let split = mercado.split(''
//console.log(split)

//Rever inverte Arrays
//Join junta transformando em string, refaz o split



/**let palindromoReverse = palavra.split('').reverse().join('');

    if(palavra === palindromoReverse){
        return true
    }else{
        return false
    }
    
}
**/