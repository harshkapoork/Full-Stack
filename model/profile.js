const mongoose = require('mongoose')
const profileSchmea = new mongoose.Schema({

    id: {
        type: String,
  
      
    },
   
    title: {
        type: String,
        required: true,
        default:" NO Title"
    },

    description: {
        type: String,
        required: true,
        default:"no description"
    
    },
    

    imageURL: {
        type: String,
        required: true,
         default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    videoURL: {
        type: String,
        required: true,
          default:"https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8="

        
    }




}, {
    timestamps:true
});

module.exports = mongoose.model("profile", profileSchmea);
