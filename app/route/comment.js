import { createComment, updateComment, getComments, deleteComment } from "../controllers/comment.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
//import modules
import express from 'express'

const router = express.Router()

router.get('/comments', isLoggedIn, async (req, res) => {
    try{
        const comments = await getComments()
        res.status(200).send({
            comments
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
        const { comment, username, postId} = req.body
        // console.log(`req.body is`, req.body)
        const createdComment = await createComment(comment, username, postId)
        
        res.status(200).send({
            comment: createdComment
        })
    }
    catch(error){
        res.status(500).send({
            createCommentError: `from POST/comments route${error}`
        })
    }

})

router.put('/comments/:id', isLoggedIn, async(req, res) => {
    try{
        const id = req.params.id
        const updatedComment = await updateComment(id, req.body)
        res.status(200).send({
            updatedComment
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
            deletedComment
        })
    }
    catch(error){
        res.status(500).send({
            deleteCommentError: `${error}`
        })
    }
})


export default router