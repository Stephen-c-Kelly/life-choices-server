import { createComment, updateComment, getComments, deleteComment } from "../controllers/comment.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
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
    try{
        const comment = await createComment(req.body)
        res.status(200).send({
            newComment: `${comment}`
        })
    }
    catch(err){
        res.status(500).send({
            createCommentError: `${err}`
        })
    }

})

router.put('/comments/:id', isLoggedIn, async(req, res) => {
    try{
        const id = req.params.id
        const updatedComment = await updateComment(id, req.body)
        res.status(200).send({
            updateComment: `${updatedComment}`
        })
    }
    catch(err){
        res.status(500).send({
            updateCommentError: `${err}`
        })
    }
})

router.delete('/comments/:id', isLoggedIn, async (req, res) => {
    try{
        const id = req.params.id
        const deletedComment = await deleteComment(id)
        res.status(200).send({
            deleteComment: `${deletedComment}`
        })
    }
    catch(err){
        res.status(500).send({
            deleteCommentError: `${err}`
        })
    }
})


export default router