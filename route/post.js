import { getPosts, createPost, updatePost, deletePost, getSinglePost } from "../controllers/post.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

import express from "express";
const router = express.Router()





router.get('/posts', isLoggedIn, async (req, res) => {
    try{
        const allPosts = await getPosts()
        res.status(200).json({
            allPosts
        })
    }
    catch(error){
        res.status(500).send({
            getPostError: `${error}`
        })
    }
})

router.get('/posts/:id', isLoggedIn, async (req, res) => {
    try{
        const id = req.params.id
        const post = await getSinglePost(id)
        res.status(200).json({
            post
        })
    }
    catch(error){
        res.status(500).send({
            getPostError: `${error}`
        })
    }
})

router.post('/posts', isLoggedIn, async (req, res) => {
    try{
        const newPost = await createPost(req.body)
        res.status(200).send({
            post: `${newPost}`
        })
    }
    catch(error){
        res.status(500).send({
            createPostError: `${error}`
        })
    }
})


router.put('/posts/:id', isLoggedIn, async(req, res) => {
    try{
        const id = req.params.id
        const updatedPost = await updatePost(id, req.body)
        res.status(200).send({
            postUpdated: `${updatedPost}`
        })
    }
    catch(error){
        res.status(500).send({
            updatePostError: `${error}`
        })
    }
})

router.delete('/posts/:id', isLoggedIn, async(req, res) => {
    try{
        const id = req.params.id
        const deletedPost = await deletePost(id)
        res.status(200).send({
            postDeleted: `${deletedPost}`
        })
    }
    catch(error){
        res.status(500).send({
            deletePostError: `${error}`
        })
    }


})


export default router