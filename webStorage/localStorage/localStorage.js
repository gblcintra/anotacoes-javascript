
//localstorage fica salvo no navegador

//Para salvar algo no localstorage
localStorage.setItem('name', 'Gabriel')
localStorage.setItem('lastname', 'Cintra')


//pegar informação salva no local storage
var name = localStorage.getItem('name');
//ou
var name2 = localStorage.name;

var lastname = localStorage.getItem('lastname');
//ou
var lastname2 = localStorage.lastname;

console.log(name + lastname)
console.log(name2 + lastname2)

//remover algo no local storage
localStorage.removeItem('name');
localStorage.removeItem('lastname');


var nome = localStorage.nome;
if (typeof nome == 'undefined') {
    localStorage.nome = prompt('Digite seu nome: ');
}
nome = localStorage.nome;

document.write(`<div id=nome>${nome}</div>`)
