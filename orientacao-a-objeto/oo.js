//Criar um objeto

function Carro(){
    
    //this faz a referencia a esse objeto
    this.marca = "VolksWagen";
    this.nome = "Gol";
    this.ano = "2019";
    this.potencia = "110cv";



}

var carro1 = new Carro();
carro1.potencia = "180cv";

var carro2 = new Carro();
carro2.ano = "2015";
carro2.potencia = "90cv"