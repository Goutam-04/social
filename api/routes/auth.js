const express=require('express')
const router = express.Router();
// this ROuteer() function creates a middleware where you can make routes using express

const auth=router.get("/",(req,res)=>{
    res.send("hello there its me")
})

module.exports=auth