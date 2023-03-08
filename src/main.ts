import 'reflect-metadata'
import './shared/index'

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