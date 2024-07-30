const express = require('express')
const router = express.Router();
const Login = require("../model/user");
const user = require('../model/user');
const app = express()
app.use(express.json())



router.post("/", async (req, res) => {
    const data = req.body
    
    const email = data.email;
   
    const password = data.password;
    console.log(data)
  

    const filter = {
        email: { email: email },
        password: { password: password}
    }
    const checkUserEmail = await user.findOne(filter.email)
  
    if (checkUserEmail) {
        // console.log("login  is correct")

        const userData = await Login.findOneAndUpdate( filter.email, { $set: { password: password } },{new:true})
        res.json({status:true, message: "Password Reset Successfully", userData })    
        console.log(" Reset succress")
    } 
    else {
        res.json({status:false, message: "User not Found" })
        console.log("login failed")
    } 

})

module.exports=router