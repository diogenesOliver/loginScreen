import { Schema, model } from 'mongoose'

interface IUser {
    email: string,
    senha: string,
    confirmaSenha: string
}

const UserModel = new Schema<IUser>(
    {
        email: { type: String, required: true },
        senha: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 100
        },
        confirmaSenha: { type: String, required: true }
    },{
        timestamps: true
    }
)

const User = model<IUser>('User', UserModel)

export { User }