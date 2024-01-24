//import databse
import 'dotenv/config.js'
import './app/config/database.js'

//import middleware
import  express  from 'express'
import cors from 'cors'
import morgan from 'morgan'

//import routers
import userRouter from './app/route/user.js'
import authRouter from './app/route/auth.js'
import profileRouter from './app/route/profile.js'
import commentRouter from './app/route/comment.js'
import postRouter from './app/route/post.js'

//use middleware
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())// parse json bodies
app.use(cors())// add cors headers
app.use(morgan('tiny'))// log the request for debugging


// Set routes
app.use('/', userRouter)
app.use('/', authRouter)
app.use('/', profileRouter)
app.use('/', commentRouter)
app.use('/', postRouter)


app.use(cors({
    origin: '*' // Allow only your frontend to access
  }));


app.listen(PORT, function(){
    console.log(`App is running on server ${PORT}`)
})