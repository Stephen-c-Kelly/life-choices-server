import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    username:{type: String, required: true, unique:true, match: /^[A-Za-z0-9]+$/},
    // userId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    img:[{type: String}],
    postId: [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}], //multiple posts
    friends: [{type: String}], // An array of usernames
},
{timestamps: true})

const Profile = mongoose.model('Profile', profileSchema)
export default Profile