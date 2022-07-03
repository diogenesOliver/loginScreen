const express = require('express')
const linkController = require('../linkController/linkController')
const router = express.Router()

router.get('/home-page', (req, res) => res.render('index'))
router.get('/login-user', (req, res) => res.render('logar'))
router.get('/user-exist', (req, res) => res.render('login'))

router.post('/register', linkController.registeringUser)
router.post('/login', linkController.userInTheSystem)

module.exports = router