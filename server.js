//import databse
import 'dotenv/config.js'
import './config/database.js'

//import middleware
import  express  from 'express'
import cors from 'cors'
import morgan from 'morgan'

//use middleware
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())// parse json bodies
app.use(cors())// add cors headers
app.use(morgan('tiny'))// log the request for debugging


// Set routes
app.use('/', function(){
    console.log(`hello`)
})

app.use(cors({
    origin: '' // Allow only your frontend to access
  }));


app.listen(PORT, function(){
    console.log(`App is running on server ${PORT}`)
})