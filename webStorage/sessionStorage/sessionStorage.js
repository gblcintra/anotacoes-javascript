//salvar lista
localStorage.lista = ["Gabriel", 26]


//sessionStorage fica salvo somente gando o navegador estiver aberto

//Para salvar algo no sessionStorage
sessionStorage.setItem('name', 'Gabriel')
sessionStorage.setItem('lastname', 'Cintra')


//pegar informação salva no session storage
var name = sessionStorage.getItem('name');
//ou
var name2 = sessionStorage.name;

var lastname = sessionStorage.getItem('lastname');
//ou
var lastname2 = sessionStorage.lastname;

console.log(name + lastname)
console.log(name2 + lastname2)

//remover algo no session storage
sessionStorage.removeItem('name');
sessionStorage.removeItem('lastname');


var nome = sessionStorage.nome;
if (typeof nome == 'undefined') {
    sessionStorage.nome = prompt('Digite seu nome: ');
}
nome = sessionStorage.nome;

document.write(`<div id=nome>${nome}</div>`)

//salvar lista
sessionStorage.lista = ["Gabriel", 26]