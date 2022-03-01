//Exemplo do link de leitura:
//https://ricardo-reis.medium.com/empilhar-stack-em-arrays-javascript-9504645d18ff


function reverse(str) {
    let stack = [];
    //adicionar letras no stack (pilha)
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    //excluir letra do stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }

    return reverseStr;
}

console.log(reverse('0 1 2 3 4 5 6 7 8 9 '));

let listaGatos = ['madruga','neguinho', 'ponta branca'];
console.log(listaGatos)


listaGatos.push('Branquinha');
console.log(listaGatos)

listaGatos.push('Nega', 'Oncinha');
console.log(listaGatos)

console.log(listaGatos.length);


listaGatos.pop()
console.log(listaGatos)

listaGatos.splice(3,1)
console.log(listaGatos)
