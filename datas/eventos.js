//Campo focado
function datas() {
    
    var data = new Date();
    
    console.log("🚀 ~ file: eventos.js ~ line 7 ~ datas ~ data.getHours();", data.getHours())
    console.log("🚀 ~ file: eventos.js ~ line 8 ~ datas ~ data.getMinutes();", data.getMinutes())
    console.log("🚀 ~ file: eventos.js ~ line 9 ~ datas ~ data.getSeconds();", data.getSeconds())
    
    //pegar em segundos
    var segundos = Date.parse("March 10, 2018")
    console.log("🚀 ~ file: eventos.js ~ line 12 ~ datas ~ teste", segundos)
    
    //pegando tada expecifica 
    var dataEspecifica = new Date(segundos);
    console.log("🚀 ~ file: eventos.js ~ line 15 ~ datas ~ dataEspecifica", dataEspecifica)
    
    //dias da semana
    console.log("🚀 ~ file: eventos.js ~ line 1 ~ datas ~ data.getDay()", data.getDay())
    var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
    var diaDaSemana = dias[data.getDay()]
    console.log("🚀 ~ file: eventos.js ~ line 23 ~ datas ~ diaDaSemana", diaDaSemana)

    
    //somar data
    var dataS = data.getDay();
    console.log("🚀 ~ file: eventos.js ~ line 27 ~ datas ~ dataS", dataS)
    var soma = data.setDate(dataS + 10)
    console.log("🚀 ~ file: eventos.js ~ line 28 ~ datas ~ soma", soma)
    resultado = new Date(soma);
    console.log("🚀 ~ file: eventos.js ~ line 30 ~ datas ~ resultado", resultado)
}

