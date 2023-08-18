const express=require('express')
const router = express.Router();
// this ROuteer() function creates a middleware where you can make routes using express

const bcrypt = require('bcrypt');


const User=require('../models/User')

router.post("/register",async (req,res)=>{
    try{

        // to hash a password
        const saltRound=10;
        const salt= bcrypt.genSaltSync(saltRound);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        })

        // save and register user data
        const user=await newUser.save();
        res.status(200).json(user)
    }
    catch
        (error){console.log(error);}
    
})

// LOGIN

router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compareSync(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
      }
    
})

module.exports=router