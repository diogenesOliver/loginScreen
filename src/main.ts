import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

import { routes } from './routes'

dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public'))

app.use('/api', express.json(), express.urlencoded({ extended: true }), routes)
app.use('/api', express.static(path.join(__dirname, 'public')))

export { app }

/* JS */

/* require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const apiRoute = require('./routes/api')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public'))

app.use('/api', express.json(), express.urlencoded({ extended: true }), apiRoute)
app.use('/api', express.static(path.join(__dirname, 'public')))

mongoose.connect(process.env.URL_DATABASE).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connect in DataBase - Server run on port: ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
}) */