import Comment from "../model/comment.js";


const getComments = () => {
    return Comment.find({})
    .then( comment =>{
        return comment
    })
    .catch(err => {
        throw err
    })
}

// Must pass a postId to create the comment
const createComment = (comment, postId) => {
    return Comment.create(comment)
    .then (comment => {
        // Post.findByIdAndUpdate( postId, {$push: {commentId:comment._id}}, {new:true})
        // .then( updatedpost => {
        //     return updatedpost
        // })
        // .catch(err => {
        //     throw err
        // })
        
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
    .catch(err => {
        throw err
    })
}

const deleteComment = ( commentId ) => {
    return Comment.findByIdAndDelete(commentId)
    .then( deletedComment => {
        // Post.updateMany(
        //     { commentId: { $in: [commentId] } },
        //     { $pull: { commentId: commentId } }
        // )
        // .then( updatedpost => {
        //     return updatedpost
        // })
        // .catch(err => {
        //     throw err
        // })
        return deletedComment
    })
    .catch(err => {
        throw err
    })

}

export {
    getComments,
    createComment,
    deleteComment,
    updateComment
}