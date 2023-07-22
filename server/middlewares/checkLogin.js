const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    const {authorization} = req.headers
    console.log(req.headers.authorization)
    try{
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        const {_id, email, username} = decoded
        console.log(username)
        req.username = username
        req.email = email
        req.userId = _id
        next()
    }
    catch(err){
            next("Authentication Failures")
        }
}

module.exports = checkLogin;