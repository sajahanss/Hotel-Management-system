const mongoose=require("mongoose")

const profilescheme=new mongoose.Schema({
    userprofileid: String,
    myFile: String,
    
});

const profiledata=mongoose.model("profilepics",profilescheme);

module.exports=profiledata;