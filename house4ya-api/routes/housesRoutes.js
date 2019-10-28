const express = require('express')
const router = express.Router()
const houseController = require('../controllers/houseController')
const uploader = require('../configs/storage.config')

router.get('/list', houseController.list )
router.get('/properties', houseController.listHouses)

router.post('/create_house', houseController.createHouse)

router.put('/edit_house/:owner/:house',uploader.single('photos'), houseController.editHouse)

module.exports = router