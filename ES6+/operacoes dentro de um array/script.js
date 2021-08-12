

const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function(item){
    return item * 5;
})

const novaLista2 = lista.map((item, index)=>{
    return item + index;
})
console.log("🚀 ~ novaLista",novaLista)
console.log("🚀 ~ novaLista2", novaLista2)

//somar todos os itens de uma forma mais pratica
//
const soma = lista.reduce(function(total, proximoItem){
    return total + proximoItem
})
//total = 0
//proximo = 1
//total = 0 + proximo
//total = 1
//proximo = 2
//total = 1 + proximo
//total = 3
//.....
//total = 21
//at[e acapar o array
console.log("🚀 ~ soma", soma)


//Produca o item no array
const find = lista.find(function(item){
    return item === 6;
})
//se existir o item ele retorna com o valor, 
//se n'ao ele retorna undefined
console.log("🚀 ~ find", find)

