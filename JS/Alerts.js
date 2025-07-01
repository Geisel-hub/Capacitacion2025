function aviso(tipo, mensaje, texto) {
    switch (tipo) {
        case 1:
            Swal.fire({
                title: "" + mensaje + "",
                text: "" + texto + "",
                icon: "success"
            });
            break
        case 2:
            Swal.fire({
                title: "" + mensaje + "",
                text: "" + texto + "",
                icon: "error"
            });
            break
        case 3:
            Swal.fire({
                title: "" + mensaje + "",
                text: "" + texto + "",
                icon: "warning"
            });
            break
    }
}