require('dotenv').config()

const express = require('express')
const mognsoose = require('mongoose')
const path = require('path')
const apiRoute = require('./routes/api')

const PORT = 3000
const app = express()

app.use('/api', express.json(), apiRoute)
app.use('/', express.static(path.join(__dirname, 'public')))

mognsoose.connect(process.env.URL_DATABASE).then(() => {
    app.listen(PORT, () => {
        console.log(`Connect in DataBase - Server run on port: ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
})