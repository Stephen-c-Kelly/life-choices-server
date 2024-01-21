import mongoose from "mongoose";
import User from '../model/user.js'
import Profile from "../model/profile.js";
import bcrypt from 'bcrypt'


// Get all users
const getUser = () => {
    return User.find({})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}


// Create a user
// const createUser = (user) => {
//     return User.create(user)
//     .then(response => {
//         return response
//     })
//     .catch(error => {
//         throw error
//     })
// }

// Update a user. If the password is to be changeds, password will be encrypted.
const updateUser = async (id, updateInfo) =>{
    // console.log('BEFORE',updateInfo.password)
    //encrypt password.
    return bcrypt.hash(updateInfo.password, 10)
    .then(password => {
        updateInfo.password = password
        return User.findByIdAndUpdate(id, updateInfo, {new: true})
        .then(response =>{
            // console.log(response.password)
            return response
        })
        .catch(error => {
            throw error
        })
        })

}

// Delete a user
const deleteUser = (id) =>{
    return User.findByIdAndDelete(id)
    .then (response => {
        Profile.findByIdAndDelete(response.profileId)
        return response
    })
    .catch(error => {
        throw error
    })
}

export { 
    getUser,
    // createUser,
    updateUser,
    deleteUser

}