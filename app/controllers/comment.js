import Comment from "../model/comment.js";
import Post from "../model/post.js";


const getComments = () => {
    return Comment.find({})
    .then( comment =>{
        return comment
    })
    .catch(error => {
        throw error
    })
}

// Must pass a postId to create the comment
const createComment = (body) => {
    return Comment.create(body)
    .then (comment => {
        Post.findByIdAndUpdate( body.postId, {$push: {commentId:comment._id}}, {new:true})
        .then( updatedpost => {
            console.log(updatedpost,'post with updated commentId')
            return updatedpost
        })
        .catch(err => {
            throw err
        })
        
        return comment
    })
    .catch(err => {
        throw err
    })
}


const updateComment = (id, edit) => {
    return Comment.findByIdAndUpdate(id, edit, {new: true})
    .then( update => {
        return update
    })
    .catch(error => {
        throw error
    })
}

const deleteComment = ( commentId ) => {
    return Comment.findByIdAndDelete(commentId)
    .then( deletedComment => {
        Post.updateMany(
            { commentId: { $in: [commentId] } },
            { $pull: { commentId: commentId } }
        )
        .then( updatedpost => {
            console.log('remove the commentId',deletedComment._id)
            console.log('update the post after delete a comment', updatedpost)
            return updatedpost
        })
        .catch(err => {
            throw err
        })
        return deletedComment
    })
    .catch(error => {
        throw error
    })

}

const deleteMultiComments = (commentId) => {
    return Comment.findByIdAndDelete(commentId)
}

export {
    getComments,
    createComment,
    deleteComment,
    updateComment,
    deleteMultiComments
}