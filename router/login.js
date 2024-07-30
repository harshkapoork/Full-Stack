const express = require('express')
const router = express.Router();
const user = require('../model/user');
const app = express()
// const admin = require("../config/firebase")





app.use(express.json())

// extract info from token

// router.post("/test", async (req, res) => {
//     const token =req.body.token.authorization

//     // = req.data
//     // console.log(token)
    
//     const decodeValue = await admin.auth().verifyIdToken(token)
//     console.log(decodeValue)
//     res.json(decodeValue)
// })



// router.post("/google", async (req, res) => {
  

//     const token =req.body.token.authorization
//     // console.log(token)
    
//     const decodeValue = await admin.auth().verifyIdToken(token)

//     const filter = {
//         email: { email: decodeValue.email },
       
//     }
//     const CheckUser = await user.findOne(filter.email)
   

//     if (!CheckUser)
//     {
//         const newUser = new user({
//         username: decodeValue.name,
//             email: decodeValue.email,
    
//     });
//     try {
//         const newUserData = await newUser.save();
    
      
//         res.status(201).json({status:true,message: " successfully SignedUp" })
        
        
//     }
//     catch (error) {
//         res.json({ status: false, message: "Signup failed" })
      
//     }
        
     
//     }
//     else {
//         res.json("Email already register")
       
//     }

    
    
// })
// extract info from token



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
    const checkUserPassword = await user.findOne(filter.password)
    if (checkUserEmail && checkUserPassword) {
        // console.log("login  is correct")
        const userData = await user.findOne(filter.email,).select('-password')
        res.json({status:true, message: "Log in Successfully", userData })    
        console.log("login succress")
    } 
    else {
        res.json({status:false, message: "Incorrect Email or Password" })
        console.log("login failed")
    } 

})

module.exports=router
