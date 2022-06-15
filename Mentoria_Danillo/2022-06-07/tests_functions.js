
// FUNÇÃO DE SOMA
function soma(numero1, numero2){
    console.log(numero1 + numero2)
    return
}

console.log(soma(1,2))

//FUNÇÃO PARA CHECAR NUMEROS PARES
function checkNumerEven(number){
    parseInt
    if(number%2 === 0 ){
        return true
    }else{
        return false
    }
}
console.log(checkNumerEven("5"))

//FUNÇÃO PARA CALCULAR A IDADE
function age(year){
    let currentYear = new Date().getFullYear();
    let inputYear = year
    return console.log(currentYear - inputYear);
}
console.log(age(1990))



//fonte: https://blog.dbins.com.br/calculando-a-idade-com-javascript#:~:text=Vamos%20calcular%20idade%20pela%20data,var%20ano_atual%20%3D%20new%20Date().
function calculaIdade(dataNasc){ 
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoNascParts = dataNasc.split('/');
    let diaNasc =anoNascParts[0];
    let mesNasc =anoNascParts[1];
    let anoNasc =anoNascParts[2];
    let idade = anoAtual - anoNasc;
    let mesAtual = dataAtual.getMonth() + 1; 
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if(mesAtual < mesNasc){
        idade--; 
        } else {
        //Se estiver no mes do nascimento, verificar o dia
        if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 
            //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
            idade--; 
            }
        }
    } 
    return idade; 
}
console.log(calculaIdade('10/10/1990'));