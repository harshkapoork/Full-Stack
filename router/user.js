const express = require('express')
const router = express.Router();
const Login = require("../model/user");
const user = require('../model/user');
const { trusted } = require('mongoose');

const app = express()
app.use(express.json())


router.post("/", async (req, res) => {

    const data = req.body
    console.log(data)
    const filter = {
        // username: data.username,
        email:data.email
    }
    const checkUser = await user.findOne(filter)
    if (!checkUser) {
        const user = new Login({
            username: data.username,
            email: data.email,
            password: data.password
        });
        try {
            const newUser = await user.save();
            console.log("data saved in db")
            res.status(201).json({status:true,message: " successfully SignedUp" })
            
            
        }
        catch (error) {
            res.json({status:false, message: "Signup failed"})
        }
       

    }
    else {
        
        
        res.json({status:false,message:"Email already Registered "})
        
    }

})



//update route
// router.get("/update",async (req, res) => {
//     try {
//         const user = await Login.findOneAndUpdate({ first_name: "jatin" }, { $set: { email: "jatin@gmail.com" } },{new:true})
//         console.log(user)
       
    
// } catch (error) {
//     res.json(error)
//     }
    

// })
// //delete route
// router.post("/delete", async (req, res) => {

   
//         const data = req.body.name
//         try {
//             const user = await Login.findByIdAndDelete(data)
//             console.log(data)
            
      
   
      
      
//   console.log(user)
     
     
    
// } catch (error) {
//         res.json(error)
//         console.log("error in del")
//     }
    

// })



// router.post("/",   async(req, res) => {
//     var response = []
//     try {
//         response= req.headers
        
//         console.log(response)
//         res.json(response.mobile)
        
//     }
//     catch (er) {
//         res.json(err.message)
//         console.log(err)
//     }
   
   
// }
// ) 

module.exports=router