const express = require('express')
const linkController = require('../linkController/linkController')
const router = express.Router()

router.post('/register', express.urlencoded({ extended: true }), linkController.register)
router.post('/login', express.urlencoded({ extended: true }), linkController.loginUser)

module.exports = router