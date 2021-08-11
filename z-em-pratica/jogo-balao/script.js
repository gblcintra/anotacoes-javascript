// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo
var total = 0;

function criarBalao() {

	var balao = document.createElement("div");
	balao.setAttribute("class", "balao");

	//Math,random gera um numero aleatório , quando coloca *600 falo que quero  
	//gerar entre 600
	//Math.floor é um numero semmpre decimal, sem virgulas
	var x = Math.floor(Math.random() * 600);
	var y = Math.floor(Math.random() * 400);

	//Mudando cor aleatoriamente
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var opacidade = Math.random() * 1;

	balao.setAttribute("style", "left:" + x + "px; top:" + y + "px; background-color:rgba(" + r + "," + g + "," + b + "," + opacidade + ")");
	//para estourar ele passa o this passando o objeto
	balao.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(balao);

}

function estourar(objeto) {
	console.log("🚀 ~ file: script.js ~ line 31 ~ estourar ~ objeto", objeto)

	document.body.removeChild(objeto);
	total++;
	var score = document.getElementById('total');
	score.innerHTML = "Baloes estourados: " + total;

}

function carregarJogo() {
	//executa a função de criação do balao de 1 em 1 segundo
	setInterval(criarBalao, 1000);
}