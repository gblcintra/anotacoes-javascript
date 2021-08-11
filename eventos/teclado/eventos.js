//No Mac se segurar ela executa somente uma vez
function tecladoApertado(event){
    //para saber qual o codigo da tecla clicada
    console.log('teclado apertado ' + event.keyCode);

    //Clicar no shift
    console.log('teclado apertado ' + event.shiftKey);

    //Clicar no Ctrl
    console.log('teclado apertado ' + event.ctrlKey);

    var tecla = event.keyCode
    
    //Apertar a tecla enter
    if(tecla == 13){
        console.log('Enter Clicado');
    }
}

//Quando solta a tecla
function tecladoSolto(event){
    console.log('Soltou o teclado');
}

//Executa mesmo que a tecla tiver precionada
function tecladoApertou(event){
    console.log('Apertou uma tecla');
}