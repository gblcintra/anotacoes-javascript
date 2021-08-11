
//Campo focado
function validar(event){
    var numeroValor = document.getElementById('numero').value;
    var nomeValor = document.getElementById('nome').value;
    if(numeroValor.length > 2){
        event.preventDefault();
        alert('Digite 2 numeros ou menos!')

        //foca no campo do formulario, por isso de colocar o nome 
        //na tag form
        document.formulario.numero.focus();
        return false;
        
    }else if(nomeValor.length < 3){
        event.preventDefault();
        alert('Digite nome maior!')
        document.formulario.nome.focus();
        return false;
    }else{
        alert('Formulario enviado com sucesso!')
    }
}
