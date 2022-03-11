document.addEventListener('DOMContenteLoaded', () => {
    redirectToRoute()
})

function redirectToRoute(){

    let inputEmail = document.getElementById('inputEmail')
    let inputSenha = document.getElementById('inputSenha')
    let inputConfirmarSenha = document.getElementById('inputConfirmarSenha')
    
    const methodDefined = { method: 'POST',  }

    fetch('http://localhost:3000/api/register', methodDefined).then(res => {


    })

}