const mongoose=require("mongoose")

const Bookingschema=new mongoose.Schema({
    userid: String,
    guestname: String,
    guestemail: String,
    phonenumbet:String,
    address:String,
    adult:String,
    Child:String,
    totroom:String,
    roomtype:String,
    date:String,
    todate:String,
    cost:String,
    amount:String,
    payment_id:String,
    aadhar_no:String,
    book_id:String,
    no_night:String,
    gtot:String,
});

const bookingdata=mongoose.model("Booking",Bookingschema);

module.exports=bookingdata;