const form = document.getElementById('loginForm')
const mess = document.getElementById('mess')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const user = document.getElementById('txtUser').value.trim()
    const pass = document.getElementById('txtPass').value.trim()

    fetch('https://script.google.com/macros/s/AKfycbykmlujEZXOjr8p87Wwj_g3IOevsPTufOWZxBxxbLkmqRjNEJy1JHdz13qVhgbZlC7k/exec')
    .then(res => res.json())
    .then(data => {
        console.log("Datos:", data)
        const usuario = data.find(item => item.Correo === user && item.Password === pass)

        if(usuario){
            mess.textContent = `¡Bienvenido, ${usuario.Nombre}!`
            mess.style.color = 'green'
        }else{
            mess.textContent = '¡Contraseña Incorrecta'
            mess.style.color = 'Red'
        }
    }).catch(err => {
        console.error(err)
        mess.textContent = 'Error al conectar con el servidor'
        mensaje.style.color = 'red'
    })
})