//includes
//endsWith
//startWith

//includes
let nomes = ["Nome1", "Nome2", "Nome3"];

//retorna um boolean
console.log(nomes.includes('Nome2'));

if (nomes.includes('Nome2')) {
	console.log('Esta na lista');

} else {
	console.log('Não esta na lista');
}

let nome = "Gabriel";
//verifica  se a frase termina com uma determinada coisa
//no caso iel, retornando um boolean
console.log('Termina com?: ', nome.endsWith('iel'));
//verifica  se a frase começa com uma determinada coisa
//no caso iel, retornando um boolean
console.log('Começa com Gabr?: ', nome.startsWith('Gabr'));