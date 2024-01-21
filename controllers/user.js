import mongoose from "mongoose";
import User from '../model/user.js'
import jwt from 'jsonwebtoken'


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

// Update a user
const updateUser = (id, updateInfo) =>{
    return User.findByIdAndUpdate(id, updateInfo, {new: true})
    .then(response =>{
        return response
    })
    .catch(error => {
        throw error
    })
}

// Delete a user
const deleteUser = (id) =>{
    return User.findByIdAndDelete(id)
    .then (response => {
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