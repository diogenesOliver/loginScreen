import mongoose from 'mongoose'

require('dotenv').config()

mongoose.set('strictQuery', true)

export class DataBaseClient{

    async connect(){
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.soxmfwd.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log('Succes to connect to DataBase')
    }

}