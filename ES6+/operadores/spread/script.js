let primeiros = [1, 2, 3]
let numeros = [4, 5, 6]

//junta os arrays usando o ...
let juntos = [...primeiros, ...numeros]

//forma 2 arrays sem fazer a mesclagem deles.
let arrays = [primeiros, numeros]


function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo:"Programador",
        status: Math.floor(Math.random() * 2),
        codigo: Math.floor(Math.random() * 600)
    }
    return novosDados;
}

cadastroPessoa({nome:"Gabriel", sobrenome:"Cintra", anoInicio: 2021})