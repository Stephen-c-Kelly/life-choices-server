import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URI)

const db = mongoose.connection
db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}`)
})