//https://sujeitoprogramador.com/rn-api/?api=posts

var listElement = document.querySelector('#app');
var posts = [];

function nutriApp(){


	fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
	//transforma em json essa resposta e da sucesso
    .then(response => response.json())
	.then(json => {
		posts = json;

		console.log(posts);

        //posts referenciando nosso array completo e atribuindo 
        //1 por 1 para post
		for(post of posts){
			var titleElement = document.createElement('li');
			var title = document.createTextNode(post.titulo);

			var imgElement = document.createElement('img');
			imgElement.src = post.capa;
            //adiciona um estilo
			imgElement.style = "width: 150px; height: 150px";



			titleElement.appendChild(title);
			listElement.appendChild(imgElement);
			listElement.appendChild(titleElement);
		}


	})

}

nutriApp();