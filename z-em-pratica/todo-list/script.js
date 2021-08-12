
//Buscando dentro da Div app a UL
var listElement = document.querySelector('#app ul');

//Buscando dentro da Div app a input
var inputElement = document.querySelector('#app input');

//Buscando dentro da Div app a button
var buttonElement = document.querySelector('#app button');

// var todos = ["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4", "Tarefa5"]
//converte com JSON.parce o array para stryng
// se n'ao tiver nada , pega o array vazio, por isso da validação || []
var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

//Renderiza todos os itens da lista
function renderTodos() {

	listElement.innerHTML = '' || null;

	//percoreser todos e armazenar cada item da lista dentro da variavel todo
	//percorre uma vez armazena em todos.
	for (todo of todos) {
		console.log(todo);

		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');

		//pegar a posição do item no array
		var posicao = todos.indexOf(todo);

		//atribuindo a função de apagar ao evento do click excluir
		linkElement.setAttribute('onclick', `deletarTodo(${posicao})`);
		
		//atribuindo id na li 
		todoElement.setAttribute('id', posicao);

		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);

		//atribuindo todo conteudo do todoElement na lista
		listElement.appendChild(todoElement);

	}

}

renderTodos();

function salvarDados() {
	localStorage.setItem('lista_todos', JSON.stringify(todos));
}

function adicionarTodo() {

	if (inputElement.value == '') {
		alert("Digite alguma tarefa!");
		return false;
	} else {
		var todoText = inputElement.value;

		//adicionando novo item na lista
		todos.push(todoText);
		inputElement.value = '';
		renderTodos();
		salvarDados();
	}


}

buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao) {

	//apagando o item com a posi;'ao passada na linha  34
	todos.splice(posicao, 1);
	renderTodos();
	salvarDados();
}

