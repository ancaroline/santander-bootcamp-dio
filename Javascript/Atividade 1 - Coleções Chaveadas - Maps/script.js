//Crie uma função que retorna o nome dos memebros de um map
//que tem o papel 'ADMIN' no sistema
//Crie uma função getAdmins que recebe um Map;
//Crie um Map e popule-o com nomes de usuários e seus papeis no sistema (Ex: 'Luiz' => 'Admin');
//Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários
//que são administradores

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Joe', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Nanda', 'Admin');

console.log(getAdmins(usuarios));