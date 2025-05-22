const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware')

const router = express.Router();

router.get('/home-route', authMiddleware ,(req, res)=>{
    let{id, email} = req.userInfo;
 res.status(200).json({
    msg: 'hello from home',
    id: id,
    email: email
})
})

module.exports = router;