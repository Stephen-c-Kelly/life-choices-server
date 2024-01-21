import mongoose, { mongo } from "mongoose";

const commentSchema = mongoose.Schema({
    content: {type: String},
    postId:{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
},
{
    timestamps:true
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment