

function limpar(){	
    var nome = document.forms["cadastro"]["txtNome"].value;
    var	email1 = document.forms["cadastro"]["txtEmail"].value;
    var texto = document.forms["cadastro"]["esporte-preferido"].value;
    var sexo = document.forms["cadastro"]["sexo"].value;
    var navegador = document.forms["cadastro"]["navegador"].value;
    var esporte = document.getElementsByName("esportes");	
	nome.value = "";
	email1.value = "";
	texto.value = "";
	sexo.value = "";
	navegador = "";	
	esporte = "";

}
 
function validar(){
	var nome = document.forms["cadastro"]["txtNome"].value;
    var	email1 = document.forms["cadastro"]["txtEmail"].value;
    var texto = document.forms["cadastro"]["esporte-preferido"].value;
    var sexo = document.forms["cadastro"]["sexo"].value;
    var navegador = document.forms["cadastro"]["navegador"].value;
    var mug = "";
    
	var esporte = document.getElementsByName("esportes");
	var i;
	var aux =0;
	for(i=0; i < esporte.length; i++){
		if(esporte[i].checked == true){
			aux++;
		}
	}
	
    if (nome == "") {
        mug= mug +"Digite seu nome\n"; 
    }else if (nome.length < 3){
        mug = mug + "Digite seu nome completo\n";
    };

    if (email1 == "" || (email1.indexOf('@') < 1 ) || (email1.indexOf('.') < 7) ) { 
       mug = mug + "E-mail invalido\n";
    };

    if (sexo == "") {
        mug = mug + "Escolha seu sexo\n";
    };
    
    if (navegador == "") {
        mug = mug + "Escolha seu navegador\n";
    };
	
	if(aux < 2){
		mug = mug + "Escolha ao menos dois Esportes\n"
	}	


    if (texto==""){
       mug = mug + "Digite um comentário sobre o esporte preferido\n";   
    }; 

    if (mug=="") {
        alert("Cadastro realizado com sucesso!!")
        return true;
    }else{
        alert(mug)
        return false;
    }
    
}