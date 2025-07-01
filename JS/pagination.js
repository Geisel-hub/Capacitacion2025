document.getElementById("input-search").addEventListener("input", onInputChange)

function onInputChange() {
    let inputText = document.getElementById("input-search").value.toString().toLowerCase()

    let tableBody = document.getElementById("tbody-mantenimiento")
    let tableRows = tableBody.getElementsByTagName("tr")

    for (let i = 0; i < tableRows.length; i++) {
        let textConsulta = tableRows[i].cells[1].textContent.toString().toLowerCase()
        if (textConsulta.indexOf(inputText) === -1) {
            tableRows[i].style.visibility = "collapse"
        } else {
            tableRows[i].style.visibility = ""
        }
    }
}