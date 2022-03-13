document.addEventListener('DOMContenteLoaded', () => {
    redirectToRoute()
})

function redirectToRoute(){

    let inputEmail = document.getElementById('inputEmail').value
    let inputSenha = document.getElementById('inputSenha').value
    let inputConfirmarSenha = document.getElementById('inputConfirmarSenha').value
    
    const methodDefined = { method: 'POST' }

    fetch('http://localhost:3000/api/register', methodDefined).then(res => {


    })

}