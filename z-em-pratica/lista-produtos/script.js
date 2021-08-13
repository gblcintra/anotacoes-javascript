//criar lista com itens ao abrir o index.html
let lista = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log("🚀 ~ lista", lista)

//mostrar quantidade no console log 
console.log("🚀 ~ tamanho ",lista.length)

//retirnar o mouse da lista
let positionMouse = lista.indexOf("Mouse");
console.log("🚀 ~ positionMouse", positionMouse)
//Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
lista.splice(positionMouse, 1);
//ou
console.log('Tirando produto Mouse: '+ lista.filter(p => p !== 'Mouse'));



//Verificar se existe o item
let existeItem = lista.indexOf('Computador')
if (existeItem >= 0) {
	console.log('Este produto esta na lista ' + lista[existeItem]);
} else {
	console.log('Este produto não foi encontrado na lista');
}
//or
const findProduto = lista.find(p => p === 'Computador');
if (findProduto) {
	console.log('Este produto esta na lista ' + lista[existeItem ]);
} else {
	console.log('Este produto não foi encontrado na lista');
}


console.log("🚀 ~ lista", lista)
lista.splice(1, 1)
console.log("🚀 ~ file: script.js ~ line 25 ~ lista", lista)


let listaNumero = [1, 3, 5, 7, 0, 9];
//Ordene essa lista do menor para o maior.
let listaNumeroOrdenado = listaNumero.sort();
console.log("🚀 ~ listaNumeroOrdenado", listaNumeroOrdenado);

// Removendo primeiro item desta lista
console.log('Item removido: '+ listaNumero.shift());

//Inverta toda ordem da sua lista
let listaNumeroInvertido = listaNumero.reverse()
console.log("🚀 ~ listaNumeroInvertido", listaNumeroInvertido)
// Adicionando um novo numero na lista
listaNumero.push(8);
console.log(numeros);

// Dia de hoje
let hoje = '20/07/2019';
//separar as datas
let teste = hoje.split('/')

console.log("🚀 ~ file: script.js ~ line 40 ~ teste", teste);

let [dia, mes, ano] = teste;

console.log("🚀 ~ file: script.js ~ line 42 ~ dia", dia)
console.log("🚀 ~ file: script.js ~ line 42 ~ mes", mes)
console.log("🚀 ~ file: script.js ~ line 42 ~ ano", ano)

