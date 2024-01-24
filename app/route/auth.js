//import modules
import express from 'express'

//import controllers
import { signUp, signIn } from '../controllers/auth.js'

const router = express.Router()

router.post('/signup', signUp )
router.post('/signin', signIn)


export default router