//Criar um objeto

function Carro() {

    //this faz a referencia a esse objeto
    this.marca = "VolksWagen";
    this.nome = "Gol";
    this.ano = "2019";
    this.potencia = "110cv";
    this.velocidadeAtual = 0;

    this.ligar = () => {
        console.log(this.nome + ' agora esta ligado');
    }
    this.andar = (velocidade) => {
        this.velocidadeAtual = this.velocidadeAtual + velocidade;
        console.log(this.nome + '  andando a ' + velocidade + 'Km/h');
    }
    this.parar = () => {
        if (this.velocidadeAtual > 0) {
            console.log(this.nome + ' parado');
            this.velocidadeAtual = 0;
        } else {
            console.log(this.nome + ' ja esta parado');

        }
    }



}

var carro1 = new Carro();
carro1.potencia = "180cv";

var carro2 = new Carro();
carro2.ano = "2015";
carro2.nome = "Saveiro";
carro2.potencia = "90cv";