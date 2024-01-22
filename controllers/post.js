import Post from "../model/post.js";

const createPost = (req) => {
    return Post.create(req)
    .then( post => {
        return post
    })
}

const getPost = () => {
    return Post.find({})
    .then( posts => {
        return posts
    })
    .catch(error => {
        throw error
    })
}

const updatePost = (id, update) => {
    return Post.findByIdAndUpdate(id, update, {new: true})
    .then (update => {
        return update
    })
    .catch(error => {
        throw error
    })
}


const deletePost = (id) => {
    return Post.findByIdAndDelete(id)
    .then ( deletedPost => {
        return deletedPost
    })
    .catch(error => {
        throw error
    })
}


export {
    getPost,
    deletePost, 
    createPost,
    updatePost
}