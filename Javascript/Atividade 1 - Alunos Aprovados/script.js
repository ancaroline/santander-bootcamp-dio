//Alunos Aprovados
//Crie uma função que recebe o array alunos e um número que irá representar a média final
//Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final
//Utilize a técnica 'object destructuring' para manipular as propriedades desejadas de cada aluno
const alunos = [
    {
        nome: 'Juliana',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Joel',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Reginaldo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Jay',
        nota: 3,
        turma: '2C',
    },
];
function alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i]; //object destructuring

        if(nota >= media) {
            aprovados.push(nome);
        }

        /*
        sem object dest

        if(arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        } */
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));