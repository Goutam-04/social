const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const Connection = require('./database/db.js')

const app=express();

const PORT=process.env.port||8800;

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

Connection();


app.listen(PORT,()=>{
    console.log(`your app is running on port no. ${PORT}`);
})