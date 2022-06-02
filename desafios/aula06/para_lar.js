// Retornar sobre experiencia com pratica POMODORO e adm da rotina.
// De tirar melhor proveito do ensido do dev pleno
// Reduzir a ansiedade


// Execute um loop de 1 a 20.
// Verifique a condição se um número for divisível por 3.
// -> Se o número for divisível por 3, imprima "Fizz".
// Verifique a condição se um número for divisível por 5.
// -> Se o número for divisível por 5, imprima "Buzz".
// Verifique a condição se um número for divisível por 3 e 5.
// -> Se o número for divisível por 15, imprima "FizzBuzz".

let numeros = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];

  for (let i = 1; i <= numeros.length; i++) {
    if(i%3 == 0 && i%5 == 0){
      console.log( i , "FizzBuzz", " - é divisível por 3, 5 e 15.")
    }else if(i%2 == 0 && i%6 == 0 && i%18 === 0){
      console.log(i, "DIVISIVEL POR 2, 6 e 18")
    }else if(i%2 == 0 && i%6 == 0){
      console.log(i, "DIVISIVEL POR 2 E 6")
    }else if(i%3 == 0){
      console.log(i, "Fizz", " - é divisível por 3.")  
    }else if(i%5 == 0){
      console.log(i, "Buzz", " - é divisível por 5.")
    }else{
      console.log(i, '***')
    }

  }