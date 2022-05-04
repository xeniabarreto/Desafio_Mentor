
//MENTOR ALLAN
/*
22/02/2022 - 3º encontro

DESAFIO DA ESCADA - HACKER RANK

Montar uma escada com 06 linhas e 06 caracteres (inclui espaço) formando uma escada.

Fonte: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

*/



//SOLUÇAO  01 - Ainda com bug de um espaço a mais em todas as linhas
staircase = () => {
    const char = "#";

    for (let i = 1; i < 7; i++) {
        spaces = " ";
        spaces = spaces + " ".repeat(6 - i);
        //console.log("Spaces" , spaces.length);
        //console.log("Hastag", i)
        console.log(spaces, char.repeat(i));
    }
}

staircase();




// SOLUÇÃO DOIS
let n = 6;

//Ele faz o for I uma vez, depois o lopping completo do J e depois volta pro proximo I e refaz todo processo ate a condição ser falsa
for ( let i = 1; i <= n; i++) {
    for ( let j = 1; j <= n; j++){
        if ( i + j > n){
            //write faz ele imprimir a # sem seguir pra linha de baixo
            process.stdout.write("#");
        }
        else {
            //write faz ele imprimir um espaço sem seguir pra linha de baixo
            process.stdout.write(" ");
        }        
    }
    // quando termina o laco I e J, imprime uma string vazia pulando passando pra linha de baixo
    console.log(""); 
}
//}
//staircaseTwo();