//declarando a função
function soma(a, b) {
    //ver no console
    console.log(a+b);
    //return usado quando você precisa manipular depois o resultado
    //dessa função, talvez em outra função
    return a+b;
}

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);
/*
//chama uma função
soma(3, 5);
//3 + 5 = 8
console.log("Hello world!");*/