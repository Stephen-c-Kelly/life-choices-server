//import modules
import jwt from 'jsonwebtoken'

// import the SECRET from .env file.
const SECRET = process.env.SECRET

// Get the token from authorization, verify the token.
const isLoggedIn = (req, res, next) => {
    let token = req.get('Authorization') || req.query.token ||req.body.token
    console.log('isloggedIn', token)
    if (token) {
        token = token.replace('Bearer ', '')
        const payload = jwt.verify(token, SECRET)
        if (payload){
            req.user = payload
            // console.log('isloggedIn req.user', req.user)
            next()
        }else{
            res.status(400).json({
                message: "Token verification failed"
            })
        }

    }else{
        res.status(400).json({
            message: "malformed auth header"
        })
    }    
}

export default isLoggedIn
