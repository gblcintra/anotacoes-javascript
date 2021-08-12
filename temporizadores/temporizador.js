function acao(){
	document.write("Executando...<br/>")
}

// Executa de tempo em tempo!
//recebe uma função e o segundo o tempo em milesegundos
// var timer = setInterval(acao, 1000);

//Recebe funão e tempo somente uma vez
// setTimeout(acao, 3000);


//Implementando o setInterval dentro de uma variavel
//Para utilizar o clearInterval parar o time 
var timer = setInterval(() =>{
	var br = document.querySelectorAll('br').length
	if(br > 3) {
		alert('é maior')
		//clearInterval faz parar a execução do setInterval
		clearInterval(timer);
	}else{
		acao();
		console.log("🚀 ~ file: temporizador.js ~ line 14 ~ timer ~ br", br)
	}
}, 1000);
