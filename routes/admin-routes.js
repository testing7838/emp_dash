const express = require('express');

const router = express.Router();

router.get('/admin-route', (req, res)=>{

 res.status(200).json({msg: 'hello from admin'})
})

module.exports = router;