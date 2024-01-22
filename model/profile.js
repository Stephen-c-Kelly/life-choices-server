import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    img:[{type: String}],
    // commentId:[{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
    postId: [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}], //multiple posts
    friends: [{type: String}], // An array of usernames
},
{timestamps: true})

const Profile = mongoose.model('Profile', profileSchema)
export default Profile