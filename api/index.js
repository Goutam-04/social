const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const Connection = require('./database/db.js')
const userRoute = require('./routes/Users.js')
const authRoute = require('./routes/auth.js')
const postRoute = require('./routes/post.js')

const app=express();

Connection();

const PORT=process.env.port||8800;

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);




app.listen(PORT,()=>{
    console.log(`your app is running on port no. ${PORT}`);
})