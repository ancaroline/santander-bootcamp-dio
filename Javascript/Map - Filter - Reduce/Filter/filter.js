//Filter
//Filtre e retorne todos os números pares de um array

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 === 0;
}

const nums = [1, 23, 55, 67, 30, 2, 4]; //array

console.log(filtraPares(nums));