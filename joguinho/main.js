
var cores = ["azure","black","blue","cyan","gold","gray"];

function alertaINICIAL(){
    document.getElementsByTagName("body")[0].setAttribute("style","background-color:white");
    var num = Math.floor((Math.random() * cores.length-1) + 0);
    var corSorteada = cores[num];  
    //console.log(num);  
    //console.log(corSorteada);
    var corLida;
    var i = 0;
    while(i<cores.length){
          corLida = prompt("ESTOU PENSANDO NAS SEGUINTES CORES \n\n\nazure,black,blue,cyan,gold,gray \n\n\nQUAL COR ESTOU PENSANDO?");
        if(cores.indexOf(corLida)==-1){
            window.alert("Não foi possível identificar esta cor!");
            i++;
        }else if(cores.indexOf(corLida)==num){
            window.alert("Você acertou!! EM "+(i+1)+" tentativas!");
            document.getElementsByTagName("body")[0].setAttribute("style","background-color:"+corSorteada);
            break;
        }else if(corLida.localeCompare(corSorteada) == -1){
            i++;
            alert("A cor informada vem primeiro alfabeticamente");
        }else if(corLida.localeCompare(corSorteada) == 1){
            i++;
            alert("A cor informada vem depois alfabeticamente");
        }else{
            window.alert("Você errou! Você tem "+(cores.length - (i+1))+" tentativas!");
            i++;
        }
        
    }
    alert("Fim de jogo");
    
}

