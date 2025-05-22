const jwt = require('jsonwebtoken');
const User = require('../modals/User')

const authMiddleware = (req, res, next)=>{
    const token = req.header('authorization');
    const extractToken = token.split(" ")[1]
   
    const decode = jwt.verify(extractToken, process.env.JWT_SECRET_KEY )
    req.userInfo = decode;
    console.log(decode);

    next()
}

module.exports = authMiddleware;