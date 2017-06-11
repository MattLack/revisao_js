function exibeNome(){
    var elNome= document.getElementById('txtNome');
    var strNome = elNome.value;
    var elDisplay = document.getElementById('display');
    elDisplay.innerText = strNome;             
}

function novoContato(){
    var elListaContatos = document.getElementById("listaContatos");
    var inputContato = document.createElement("input");
    inputContato.setAttribute('name','txtContato');
                
    //<label>Contato:</label>
    var labelContato = document.createElement("label");
    labelContato.innerText = "Contato:";

    //<br>
    var br = document.createElement("br");
    var btnExc = document.createElement("input");
                
    //<input type="button":>
    btnExc.setAttribute("type","button");
    btnExc.setAttribute("value","-");
                
    btnExc.onclick = function(){
        elListaContatos.removeChild(divLinha);
        //window.alert("teste");
    }              
               
    //<div>...</div>
    var divLinha = document.createElement("div");
                
    divLinha.appendChild(labelContato);
    divLinha.appendChild(inputContato);
    divLinha.appendChild(btnExc);
    divLinha.appendChild(br);

    elListaContatos.appendChild(divLinha);
}

function imprimirDados(){

   var arrInputsContato = document.frmContatos.txtContato;
   var saidaContatos = document.getElementById("saidaContatos");
   var saida="";

   for(i=0; i<arrInputsContato.length; i++){
       saida += arrInputsContato[i].value + "<br>";
   }

   saidaContatos.innerHTML = saida;
}