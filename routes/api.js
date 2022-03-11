const express = require('express')
const linkController = require('../linkController/linkController')
const router = express.Router()

router.post('/register', linkController.register)

module.exports = router