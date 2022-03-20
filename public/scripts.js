document.addEventListener('DOMContenteLoaded', () => {
    redirectToRoute()
})

function redirectToRoute(){

    let inputEmail = document.getElementById('inputEmail').value
    let inputSenha = document.getElementById('inputSenha').value
    let inputConfirmarSenha = document.getElementById('inputConfirmarSenha').value
    
    const methodDefined = { method: 'POST' }

    fetch('http://localhost:3000/api/register', methodDefined).then(res => {

        let warningInfo = document.getElementById('warningInfo')

        if(inputEmail.value == '' || inputSenha.value == '' || inputConfirmarSenha == ''){
            warningInfo.style.display = 'block'
        }

        let exitWarning = document.getElementById('exitWarning')

        exitWarning.addEventListener('click', () => {
            warningInfo.style.display = 'none'
        })

    })

}

function redirectToSameRoute(){

    let emailUserOfSystem = document.getElementById('emailUserOfSystem').value
    let passwordUserOfSystem = document.getElementById('passwordUserOfSystem').value

    const methodDefined = { method: 'POST' }    

    fetch('http://localhost:3000/api/login', methodDefined).then(res => {

        

    })

}

function entrarNaConta(){

    let linkEnter = document.getElementById('linkEnter')
    let loginUser = document.getElementById('loginUser')
    let createUser = document.getElementById('createUser')

    linkEnter.addEventListener('click', () => {
        loginUser.style.display = 'block'
        createUser.style.display = 'none'
    })

}

function criarUmUsuario(){

    let linkCreateUser = document.getElementById('linkCreateUser')
    let createUser = document.getElementById('createUser')
    let loginUser = document.getElementById('loginUser')

    linkCreateUser.addEventListener('click', () => {
        createUser.style.display = 'block'
        loginUser.style.display = 'none'
    })

}