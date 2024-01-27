import Comment from "../model/comment.js";


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
const createComment = async (comment, username,  postId
    ) => {
    try {
        
        const newComment = await Comment.create({content: comment, username: username});
        console.log(`new comment id is:`,
        newComment._id)
        console.log(postId, `post ID that will have new comment added`)
        const updatedPost = await Post.findByIdAndUpdate(postId, { $push: { commentId: newComment._id } }, { new: true })
        
        return { newComment, updatedPost }
    } catch (err) {
        // originially this function had a simpler error block but for some reason it does not function without this more complicated error handling.
        // throw err;
        let errorMessage = "Error in createComment: ";
        if (err.message.includes("Comment.create")) {
            errorMessage += "Failed to create a new comment.";
        } else if (err.message.includes("Post.findByIdAndUpdate")) {
            errorMessage += "Failed to update the post with the new comment.";
        } else {
            errorMessage += "An unknown error occurred.";
        }
        errorMessage += ` Original error: ${err.message}`;
    }
};

    // return Comment.create(comment)
    // .then (comment => {
    //     Post.findByIdAndUpdate( postId, {$push: {commentId:comment._id}}, {new:true})
    //     .then( updatedpost => {
    //         return updatedpost, postId
    //     })
    // . catch(err => {
    //     throw err
    //     }
        
    //     return comment
    // })
    // .catch(err => {
    //     throw err
    // })



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
    .catch(error => {
        throw error
    })

}

export {
    getComments,
    createComment,
    deleteComment,
    updateComment
}