import mongoose, { mongo } from "mongoose";

const commentSchema = mongoose.Schema({
    content: {type: String},
    username: {type: String}
},
{
    timestamps:true
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment