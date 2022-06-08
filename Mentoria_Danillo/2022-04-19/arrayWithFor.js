//MENTOR DANILO

console.log("ola Xenia", "\n");


var listaDeMercado = [ "banana", "maçã", "coca-cola", "H2OH", "cenoura", "melancia", "abobora", "maçã", "mexerica", "bolacha", "suco de maracuja" ]
console.log(listaDeMercado.length, "\n")

var i;

for ( i = 0; i <= listaDeMercado.length-1; i++ ) {
    console.log(i)

    if(listaDeMercado[i] == "maçã" ) {
     console.log(listaDeMercado[i])
   }
}

var i = listaDeMercado.indexOf('mexerica');
console.log(listaDeMercado[i])
console.log(i)

// console.log(listaDeMercado[1])
// console.log(listaDeMercado[2])
// console.log(listaDeMercado[3])

// ========== TESTE DE MESA =================
// 1. primeiro vc esta declarando a variavel: var i;
// 2. a variavel "i" comeca com o valor 0: i = 0
// 3. o loop vai rolar enquanto o valor de "i" eh menor ou igual a 9: i <= 9
// 4. "i" incrementa de um em um: i++
// 5. comecar a rodar o loop: console.log(0)
// 6. incremente a variavel "i": usa o comando i++. Valor de "i" agora eh 1
// 7. "i" eh menor ou igual a 9? No nosso caso, sim.
// 8. comecar a rodar o loop: console.log(1)
// 9. incremente a variavel "i": usa o comando i++. Valor de "i" agora eh 2
// 10. "i" eh menor ou igual a 9? No nosso caso, sim.
// 11. comecar a rodar o loop: console.log(2)
// ...
// xx. incremente a variavel "i": usa o comando i++. Valor de "i" agora eh 10
// xx. "i" eh menor ou igual a 10? No nosso caso, nao.