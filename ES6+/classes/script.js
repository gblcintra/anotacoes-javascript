class List{
	constructor(){
		this.data = [];
	}
	add(data){
		this.data.push(data);
        console.log("🚀 ~ this.data", this.data);	
	}
}

//essa class esta herdando a classe List
class ListaTarefas extends List{
	constructor(){
		//caso herde usar o super
		super();

		this.tarefas = [];
	}
	addTarefa(){
		this.tarefas.push("Nova Tarefa");
        console.log("🚀 ~  this.tarefas", this.tarefas);
	}
}

//Tem que instanciar a classe
const minhasTarefas = new ListaTarefas();

document.getElementById('novo').onclick = function(){
	// minhasTarefas.addTarefa();
	minhasTarefas.add("Nova Tarefa");
}


///-------------------------------------
class Pessoa{
	constructor(){
		this.nome = '';
		this.sobrenome = '';
	}
	nomePessoa(primeiroNome){
		this.nome = primeiroNome;
		console.log('Meu nome é: ' + this.nome);
	}
	segundoNome(segundoNome){
		this.sobrenome = segundoNome;
		console.log('Meu sobrenome é: ' + this.sobrenome);
	}
	nomeCompleto(){
		let nomeCompleto = this.nome + ' ' + this.sobrenome;
		console.log(nomeCompleto)
	}
};

let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Gabriel');
pessoa1.segundoNome('Cintra');

pessoa1.nomeCompleto();