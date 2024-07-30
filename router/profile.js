const express = require('express')
const router = express.Router();
 const Profile= require('../model/profile')
const app = express()
app.use(express.json());

router.get("/",  async(req, res) => {
    const allProfile = await Profile.find();
    res.json(allProfile)
    console.log(allProfile.length)
})
// make new user profile 
router.post("/", async (req, res) => {
    const data = req.body
    console.log(data)
    const newProfile = new Profile({
        id: data.id,
        username: data.username,
        title: data.title,
        imageURL:data.imageURL,
        description: data.description,
      
        videoURL: data.videoURL
        
    });
    try {
       await newProfile.save()
            res.json({status:true, message: "Post Published" })    
            console.log("Post succress published")
    
} catch (error) {
    res.json({status:false, message: "Post Not Published",error })    
        console.log("Error in Published")
        
}


    const filter = {
        id: data.id
        
    }
    // const findUser = await Profile.findOne(filter);
    // if (findUser) {
    //     const newData = await newProfile.save()
    //     res.json({status:true, message: "Post Published", userData })    
    //     console.log("login succress")
    // }
    // else {
    //     res.json({status:false, message: "Log in Successfully", userData })    
    //     console.log("Error in Published")
        
    // }

});
module.exports=router