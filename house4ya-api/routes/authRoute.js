var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController')

/* GET home page. */
router.post('/register', authController.register );
router.post('/login', authController.login )
router.post('/logout', authController.logout )

router.get('/profile', authController.profile )

module.exports = router;
