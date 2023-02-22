import { Schema } from 'mongoose'

const UserModel = new Schema({

    email: { type: String, required: true },
    senha: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
    },
    confirmaSenha: { type: String, required: true }

})

export { UserModel }