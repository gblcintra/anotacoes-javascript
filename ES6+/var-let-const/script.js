
var nome = "Gabriel"

//VAR
if(nome == 'Gabriel'){
	var idade = 26;
	console.log('====================================');
	console.log('tem ' + idade);
	console.log('====================================');
}

//LET
if(nome == 'Gabriel'){
	let sobrenome = "Cintra";
	console.log('====================================');
	console.log('Gabriel ' + sobrenome);
	console.log('====================================');
}
//o let conseguimos acessar somente dentro do scopo em que ele esta
//ou seja, o let esta sendo acessado somente no dentro do if

//CONST
//uma variavel que não muda de valor
const Nome = "Gabriel"
//aqui ela n'ao permide a mudança pos é uma variavel que não muda o valor
Nome = "Gabriel Cintra"

var lista = [1,2,3]

for(var i in lista){
    console.log("🚀 ~ lista", lista[i])
}

for(let b in lista){
    console.log("🚀 ~ lista", lista[b])
}