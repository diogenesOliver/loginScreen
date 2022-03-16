const express = require('express')
const linkController = require('../linkController/linkController')
const router = express.Router()

/* router.get('/homePage', (req, res) => res.render('template')) */

router.post('/register', express.urlencoded({ extended: true }), linkController.register)
router.post('/login', express.urlencoded({ extended: true }), linkController.loginUser)

module.exports = router