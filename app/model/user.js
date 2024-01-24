//import modules
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10
const userSchema = mongoose.Schema({
    username:{type: String, required: true, unique:true, match: /^[A-Za-z0-9]+$/},
    email: {type: String, required: true, unique: true, match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},
    password: {type: String, required: true},
    profileId:{type:mongoose.Schema.Types.ObjectId, ref: 'Profile'},


},
{timestamps: true})



//Remove password from response
userSchema.set('toJSON',{
    transform: function(doc, ret){
        delete ret.password
        return ret
    },
})

userSchema.pre('save', function(next) {
    const user = this
    if (!user.isModified('password')) return next()

    bcrypt.hash(user.password, SALT_ROUNDS)
    .then(hash => {
        user.password = hash
        next()
    })
    .catch(error => {
        console.log('hash error', {error})
        next(error)
    })
})

userSchema.methods.comparePassword = function(trypassword, cb){
    bcrypt.compare(trypassword, this.password, cb)
}

const User = mongoose.model('User', userSchema)

export default User