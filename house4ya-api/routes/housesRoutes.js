const express = require('express')
const router = express.Router()
const houseController = require('../controllers/houseController')

router.get('/list', houseController.list )

router.post('/create_house', houseController.createHouse)

module.exports = router