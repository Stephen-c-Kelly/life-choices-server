//import modules
import express from 'express'

// import controllers
import { getProfiles, updateProfile, deleteProfile, getProfileByUsername } from '../controllers/profile.js'
import User from '../model/user.js'
import isLoggedIn from '../middleware/isLoggedIn.js'
import { updateUser } from '../controllers/user.js'

const router = express.Router()


router.get('/profiles', isLoggedIn, async (req, res) => {
    try{
        const profiles = await getProfiles()
        res.status(200).send({
            allProfiles: `${profiles}`
        })
    }
    catch(error){
        res.status(500).send({
            getProfilesError: `${error}`
        })
    }
    
})

router.get('/profiles/:username', isLoggedIn, async (req, res) => {
    try{
        const username = req.params.username
        // console.log(`get profile by username req is`, req.user.user.username)
        console.log(`username from the url is`,username)
        const profile = await getProfileByUsername(username)
        console.log(`profile is `,profile)
        
        if (username === profile[0].username){
            res.status(200).send({
                profile:`${profile}`
            })
        }else{
            res.status(500).send({
                updateProfileError:`searching by that username, a profile is not found`
            })
        }
    }
    catch(error){
        res.status(500).send({
            updateProfileError: `${error}`
        })
    }
    
})

// commented out, see note in controllers/porofile.js
// router.get('/profiles/:id', isLoggedIn, async (req, res) => {
//     try{
//         const id = req.params.id
//         console.log(`get profile by id req is`, req.user.user.profileId)
//         const profile = await getProfileById(id)
//         if (id === profile.id){
//             res.status(200).send({
//                 profile:`${profile}`
//             })
//         }else{
//             res.status(500).send({
//                 updateProfileError:`profile not found`
//             })
//         }
//     }
//     catch(error){
//         res.status(500).send({
//             updateProfileError: `${error}`
//         })
//     }
    
// })


router.put('/profiles/:id', isLoggedIn, async (req, res) => {
    try{
        const id = req.params.id
        console.log(req.user.user.profileId)
        const loggedInUser = req.user.user
        if (id === loggedInUser.profileId){
            const updatedProfile = await updateProfile(id, req.body)
            res.status(200).send({
                updateProfileInfo:`${updatedProfile}`
            })
        }else{
            res.status(500).send({
                updateProfileError:`You have no permit to update this profile or profile not found`
            })
        }
    }
    catch(error){
        res.status(500).send({
            updateProfileError: `${error}`
        })
    }
    
})

// This is not necessary. The profile is created and deleted whenever user is created and deleted.
router.delete('/profiles/:id', isLoggedIn, async (req, res) => {
    try{
        const id = req.params.id
        const loggedInUser = req.user.user
        console.log( loggedInUser)
        if (id === loggedInUser.profileId){
            const updatedUserData = {
                ...loggedInUser,
                profileId: null, // Setting profileId to empty
            }
            const updatedUser = await updateUser(loggedInUser._id, updatedUserData)
            console.log(updatedUser)
            const deletedProfile = await deleteProfile(id)
            res.status(200).send({
                deletedProfileInfo:`${deletedProfile}`,
                userUpdated: updatedUserData
            })
        }else{
            res.status(500).send({
                deletedProfileError:`You have no permit to update this profile or profile not found`
            })
        }
    }
    catch(error){
        res.status(500).send({
            deleteProfileError: `${error}`
        })
    }
})

export default router