//Dado o array [30, 30, 40, 5, 223, 2049, 2024, 5], retorne outro array com valores únicos

const meuArray = [30, 30, 40, 5, 223, 2049, 2024, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]; //para retornar outro array e não retornar um set de um array
}

console.log(valoresUnicos(meuArray));