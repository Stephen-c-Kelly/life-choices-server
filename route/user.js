//import modules
import express from 'express'

// import controllers
import { getUser, updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

// test route
router.get('/', function(req, res){
    res.send({
        message: 'home page'
    })
})

// Get all users
router.get('/users', async (req, res) => {
    try{
        const users = await getUser()
        res.status(200).send({users:users})

    }
    catch(error){
        res.status(500).send({
            getuser:`${error}`
        })
    }
    

})

//Remove this when auth router are done.
// router.post('/users', async (req, res) => {
//     try{
//         // console.log(req)
//         const newUser = await createUser(req.body)
//         res.status(200).json({
//             newUser: `${newUser}`})
//     }
//     catch(error){
//         res.status(500).send({
//             createUser: `${error}`
//         })
//     }
// })

router.put('/users/:id', async(req, res) =>{
    try{
        const id = req.params.id
        // console.log(id)
        const updateUserInfo = await updateUser(id, req.body)
        res.status(200).send({
            updateUserInfo:`${updateUserInfo}`
        })
    }
    catch(error){
        res.status(500).send({
            updateUserInfo: `${error}`
        })
    }

})

router.delete('/users/:id', async (req, res) => {
    try{
        const id = req.params.id
        const deletedUser = await deleteUser(id)
        res.status(200).send({
            deleteduser:`${deletedUser}`
        })
    }
    catch(error){
        res.status(500).send({
            deleteUserError: `${error}`
        })
    }
})


export default router
