const dotenv = require('dotenv');
const mongoose=require('mongoose')
dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection = ()=>{
    const MONGO_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@social.jjc0h2z.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGO_URI, 
        {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(()=>{
        console.log("your database is connected")
    })
    .catch((error)=>console.log("error",error.message))
    
}

module.exports=Connection


