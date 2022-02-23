
/*DESAFIO DA ESCADA - HACKER RANK
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



//
// SOLUÇÃO DOIS
let n = 6;

for ( let i = 1; i <= n; i++) {
    for ( let j = 1; j <= n; j++){
        if ( i + j > n){
            process.stdout.write("#");
        }
        else {
            process.stdout.write(" ");
        }        
    }
    console.log("");
}
//}
//staircaseTwo();