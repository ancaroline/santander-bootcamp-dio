//Reduce
//Some todos os números de um array

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) { //pre:1 e current:2
        return prev + current;  //retornar a soma do meu valor anterior com a soma do meu valor atual
    }) //da para iniciar com 0 e assim, prev será 0. Ficaria: }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));