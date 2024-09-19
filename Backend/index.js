const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const Registerdata=require("./Models/Register")
const bookingdata=require("./Models/Booking")
const profiledata=require("./Models/profilemodel")
const app=express();
const url='mongodb+srv://Sajahan-1:Sajahan123@sajahan-cluster.g6e3xnk.mongodb.net/Hotel?retryWrites=true&w=majority&appName=SAJAHAN-CLUSTER';
port=5000;

app.use(cors());
app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT,DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-with, Content-Type,Accept,Authorization'
    );
    next();
});
app.use(express.json())

mongoose.connect(url)
        .then((x)=>{console.log(`Connected Successfully! to ${x.connections[0].name} DB`)})
        .catch((err)=>{console.error(`connection Problem: ${err}`)});



app.post("/Register",(req,res)=>{

    Registerdata.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))
    
})

app.post("/Login",(req,res)=>{

    Registerdata.findOne({email:req.body.email})
    .then((user)=>{
         
        if(user){
            if(user.password === req.body.password){
                
                res.json(user)
            }else{
                res.json("Password Incorrect")
            }
        }else{
            
            res.json("E-mail not registered")
        }
    })
    .catch(err=>{
        console.log(err)
        res.json(err)})
})


app.post("/booking",(req,res)=>{

    bookingdata.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))
    
})

app.post('/bookingdetails',(req,res)=>{

    bookingdata.find({userid:req.body.user_id})
      .then((result)=>{res.json(result);})
      .catch((err)=>console.log(err))

})

app.post('/uploads',(req,res)=>{
     
    profiledata.find({userprofileid:req.body.userprofileid})
    .then((data)=>{
        
        if(data.length===0){
            profiledata.create(req.body)
            .then((sdata)=>res.json(sdata))
        }else{
            profiledata.findOneAndReplace({userprofileid:req.body.userprofileid},{userprofileid:req.body.userprofileid ,myFile:req.body.myFile})
            .then((result)=>{
                res.json(result);
               console.log("updated")
            })
            .catch(err=>res.json(err))
        }

    })
    .catch(err=>res.json(err))
})

app.post('/uploads/profile',(req,res)=>{
    profiledata.find({userprofileid:req.body.userprofileid})
    .then((sdata)=>res.json(sdata))
    .catch(err=>res.json(err))
})



app.listen(port,()=>{console.log(`listening Port http://localhost:${port}`)})

