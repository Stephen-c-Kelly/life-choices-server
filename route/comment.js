import { createComment, updateComment, getComments, deleteComment } from "../controllers/comment";
import isLoggedIn from "../middleware/isLoggedIn";
//import modules
import express from 'express'

const router = express.Router()

router.get('/comments', isLoggedIn, async (req, res) => {
    try{
        const comments = await getComments()
        res.status(200).send({
            allComments:`${comments}`
        })
    }
    catch(err){
        res.status(500).send({
            getCommentsError: `${err}`
        })
    }
})

router.post('/comments' , isLoggedIn, async(req, res) => {
    
})

