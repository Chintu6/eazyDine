const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/Login")
.then(()=>{
    // console.log("Connected Successfully");
})
.catch(()=>{
    console.log("Error in connecting to DB reser");
})

const Reserve=new mongoose.Schema({
    Rname:{
        type:String,
        
    },
    Rphone:{
        type:String,
        
    },
    Rmembers:{
        type:Number,
       
    },
    Rdate:{
        type:String,
       
    },
    Rtime:{
        type:String,
    }
})

const Reservations=new mongoose.model("reserve",Reserve)
module.exports=Reservations;