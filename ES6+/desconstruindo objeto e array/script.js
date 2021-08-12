const pessoa = {
    nome: "Gabriel",
    sobrenome: "Cintra",
    idade: 26,
    cargo: "Desenvolvedor"
}

//desconstruindo o objeto pegando o elemento 
//nome e atribuindo para uma variavel nome
let { nome, sobrenome, cargo } = pessoa;

//pega a variavel do objeto e atribui para 
//nova variavel "programador"
let { cargo: programador } = pessoa;


// Desconstruir array
let nomes = ['Gabriel', 'Cintra', 23];

//falando a posição e atribuindo o nome da variavel
let { 0: primeiroNome, 1: segundoNome, 2: idades } = nomes;

//dando nome sem passar a posição
let [ primeiroNomeArray, segundoNomeArray, idadeArray ] = nomes;



