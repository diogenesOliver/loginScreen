const express = require('express')
const linkController = require('../linkController/linkController')
const router = express.Router()

router.post('/register', linkController.register)
router.post('/login', linkController.loginUser)

module.exports = router