const express = require('express')
const linkController = require('../linkController/linkController')
const router = express.Router()

router.get('/home-page', (req, res) => res.render('index'))

router.post('/register', linkController.register)
router.post('/login', linkController.loginUser)

module.exports = router