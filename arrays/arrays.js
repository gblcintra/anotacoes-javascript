lista = [ "teste1" , "teste2" , "teste3" , "teste4" ];
lista2 = [ "teste5" , "teste6" ]

//Pegar informação por posição no array
lista[2];
//--no caso "teste3"

//Procurar um elementos no array
lista.indexOf("teste2");
//-- retorna a posição em que esta informação esta, no caso 1
//-- caso não exista ela retorna -1

//Juntar os elementos do array
lista.join(",");
//-- a lista ficaria juntas com a separação de "," no caso "teste1,teste2,teste3,teste4"

//Converte array em string
lista.toString()
//-- retorntando "teste1,teste2,teste3,teste4"

//Elimina o ultimo elemento do array
lista.pop();

//Elimina o primeiro elemento do array
lista.shift();

//Altera um elemento do array
lista[0] = "teste0";

//Adiciona um elemento no final do array
lista.push("teste4");
//-- retorna a posição em que foi inserida o elemento

//Adiciona um elemento no inicio do array
lista.unshift("teste0");
//-- retorna a posição em que foi inserida o elemento

//Concatena (junta) arrays
var listaCompleta = lista.concat(lista2)

//Comparar
var comparar = lista.indexOf("teste2")
if(comparar){
	alert("item na lista")
	console.log(comparar)
}else{
	alert("item não encontrado")
}
//-- no caso do else ele retorna -1, mostrando que n'ao existe esse item na lista