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
    catch(error){
        res.status(500).send({
            getCommentsError: `${error}`
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
    catch(error){
        res.status(500).send({
            createCommentError: `${error}`
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
    catch(error){
        res.status(500).send({
            updateCommentError: `${error}`
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
    catch(error){
        res.status(500).send({
            deleteCommentError: `${error}`
        })
    }
})


export default router