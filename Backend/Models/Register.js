const mongoose=require("mongoose")

const Registerscheme=new mongoose.Schema({
    displayName: String,
    email: String,
    password: String
});

const Registerdata=mongoose.model("Register",Registerscheme);

module.exports=Registerdata;