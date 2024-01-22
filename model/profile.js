import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    // username:{type: String, requied: true, unique: true},
    img:[{type: String}],
    // commentId:[{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
    postId: [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}], //multiple posts
    friendlist: [{type: String}], // An array of usernames
},
{timestamps: true})

const Profile = mongoose.model('Profile', profileSchema)
export default Profile