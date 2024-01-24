import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{type:String, required: true},
    img:[{type:String}], // Multiple images
    content:{type:String},
    choice1:{type:String}, // Default in 'Yes'
    choice2:{type:String}, // Default in 'No'
    category:[{type:String}], // Could be related to multiple category in stretchy goal.
    likes: [{type: String}], //store usernames,
    commentId: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}],
    profileId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
},
{timestamps: true})

const Post = mongoose.model('Post', postSchema)

export default Post