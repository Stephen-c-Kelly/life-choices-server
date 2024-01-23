import User from '../model/user.js'
import Profile from "../model/profile.js";
import bcrypt from 'bcrypt'

const getProfiles = () => {
    return Profile.find({})
    .then(profiles => {
        return profiles
    })
    .catch(error => {
        throw error
    })
}

const getSingleProfile = (id) =>{
    return Profile.findById(id)
    .then(profiles => {
        return profiles
    })
    .catch(error => {
        throw error
    })
}

const updateProfile = (id, updateInfo) => {
    return Profile.findByIdAndUpdate(id, updateInfo, {new: true})
    .then( update => {
        return update
    })
    .catch(error => {
        throw error
    })
}

// No createProile needed as it is created whenever a user is created.

const deleteProfile = (id) => {
    return Profile.findByIdAndDelete(id)
    .then( profile => {
        return profile
    })
    .catch(error => {
        throw error
    })
}

export { 
    getProfiles,
    updateProfile,
    deleteProfile,
    getSingleProfile
}