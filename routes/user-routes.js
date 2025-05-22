const express = require('express');
const {resgisterUser, loginUser, forgotPassword} = require('../controllers/auth-controller')
const router = express.Router();


router.post('/register-user', resgisterUser)
router.post('/login_user', loginUser)
router.post('/forget-password', forgotPassword)




module.exports = router