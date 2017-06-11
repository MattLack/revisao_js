var funcionarios = [];
var i=0;

function inserir() {
    var form = document.forms['cadastro'];

    var funcionario = {
        cpf: form.Icpf.value,
        nome: form.Inome.value,
        cargo: form.Icargo.value,
        salario: form.Isalario.value,
    }
    funcionarios.push(funcionario);
    atualizarTabela();
}

function atualizarTabela() {
    var table = document.getElementById("myTable"); 

    for(i;i<funcionarios.length;i++){
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = funcionarios[i].cpf;
        cell2.innerHTML = funcionarios[i].nome;
        cell3.innerHTML = funcionarios[i].cargo;
        cell4.innerHTML = funcionarios[i].salario;
        cell5.innerHTML = "<input type=\"button\" value=\"Remover\" onclick=\"remover(this)\">"
        
    }
    
}

function remover(r){
   var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

/*
function filtrar(){
    var valor = document.getElementById("SalarioFiltro");
    var TableTest = document.getElementById("myTable");
    var rowsTest = TableTest.rows;

    for(var k=1;rowsTest.length;k++){
        if(rowsTest[k]. < valor){
            remover(k);
        }


}*/