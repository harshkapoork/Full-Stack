const mongoose = require("mongoose")
const loginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            require: true,
            default:"admin123"
        },
       
        
    }
);
module.exports=mongoose.model("login",loginSchema)
