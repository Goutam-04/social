const express=require('express')
const router = express.Router();
// this ROuteer() function creates a middleware where you can make routes using express

const User=require('../models/User')

const auth=router.post("/register",async (req,res)=>{
    const newUser = await new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    try{
        const user=await newUser.save();
        res.statusCode(200).json(user)
    }
    catch
        (error){console.log(error);}
    

  

})

module.exports=auth