
//para tratas as infos , usamos o rest operator passando o... no parametro da função
function minhaLista(...nomes) {
    console.log(nomes)
}

minhaLista("Nome1", "Nome2", "Nome3")

//juntando 1 array mais alguns novos usuarios
function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [
        ...usuarios,//utilizando rest operator para juntar os usuarios com os novos
        ...novosUsuarios
    ]
    console.log(totalUsuarios)
}

let usuarios = ["Usuario1", "Usuario2"];

let novosUsuarios = cadastrar(usuarios, "Usuario3", "Usuario4")