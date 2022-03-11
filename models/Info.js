const mongoose = require('mongoose')

const Info = mongoose.model('User', {

    email: { type: String, required: true },
    senha: { type: String, required: true, minlegth: 6, maxlegth: 100 },
    confirmSenha: { type: String, required: true}

})

module.exports = Info
