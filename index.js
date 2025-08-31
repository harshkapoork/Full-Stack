const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors")
const dotenv = require("dotenv")
//new
const uri = "mongodb+srv://harshkapoor458:fIZzjxcNu1Yi5Bcx@vichle-app.x9dbv.mongodb.net/?retryWrites=true&w=majority&appName=Vichle-App";

dotenv.config();
// middleware
app.use(cors());
app.use(express.json())


// database connection
const mongoose = require('mongoose');
mongoose.connect(uri )
    .then(() => {
    console.log("Db connection Started")
})
    .catch((error) => {
        console.error({message:error.message});
    })

// routes
const SigninUserRouter = require("./router/user")

app.use("/signup", SigninUserRouter)

const loginUserRouter = require("./router/login")/** make diffrent file later */
app.use("/login",loginUserRouter)

const UserResetRouter=require("./router/userreset")
app.use("/reset", UserResetRouter)
// profile router
const ProfileRouter = require(".//router/profile")
app.use("/profile",ProfileRouter)


app.listen(port, () => {
        console.log(`server started at ${port}`)
})
    
app.get("/", (req,res) => {
    res.json("home")
})


