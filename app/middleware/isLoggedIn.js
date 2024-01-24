//import modules
import jwt from 'jsonwebtoken'

// import the SECRET from .env file.
const SECRET = process.env.SECRET

// Get the token from authorization, verify the token.
const isLoggedIn = (req, res, next) => {
    let token = req.get('Authorization') || req.query.token ||req.body.token
    // console.log('isloggedIn', token)
    if (token) {
        token = token.replace('Bearer ', '')
        jwt.verify(token , SECRET, (err, decoded) =>{
            if(err){
                return next(err)
            }
            req.user = decoded.user

            if(req.user){
                return next()
            } else{
                return res.status(401).json({msg: 'NotAuthorized'})
            }
        })
    }else{
        return res.status(401).json({msg: 'Not Authorized'})
    }
}

export default isLoggedIn   