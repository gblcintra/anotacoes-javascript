//SOME
//EVERY

//verificações em nossos objetos ou lista

let nomes = ['nome1','nome2','nome3'];

//recebe callback
//Verifica se existe 1 
let teste = nomes.some(nomes => nomes === 'nome1');

console.log('existe? :', teste);

let pessoas = [
    {nome: 'nome1',idade: 20},
    {nome: 'nome2',idade: 19},
    {nome: 'nome3',idade: 18}
]
//tbm devolve um callback
//verifica todos  dentro do objeto
let teste1 = pessoas.every(nome => nome.idade >= 19)
console.log("🚀 ~ Maior de 19 ?", teste1)
if(teste1){
    console.log('Todos maiores de 19');
}else{
    console.log('Opss... Alguem é de menor');

}