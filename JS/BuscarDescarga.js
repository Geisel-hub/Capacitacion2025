document.getElementById("txtBuscarDescarga").addEventListener("input", onInputChange);

function onInputChange(){
    let inputText = document.getElementById("txtBuscarDescarga").value.toString().toLowerCase();
    let tableBody = document.getElementById("tbody-Mantenimiento");
    let tableRows = tableBody.getElementsByTagName("tr");
    for(let i = 0; i < tableRows.length; i++){
        let textConsulta = tableRows[i].cells[2].textContent.toString().toLowerCase();
        if(textConsulta .indexOf(inputText) === -1){
            tableRows[i].style.visibility = "collapse";
        }else{
            tableRows[i].style.visibility = "";
        }
    }
}