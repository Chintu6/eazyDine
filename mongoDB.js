const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/Login")
.then(()=>{
    console.log("Connected Successfully");
})
.catch(()=>{
    console.log("Error in connecting to DB");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
        
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number,
       
    },
    password:{
        type:String,
       
    }
})


const LogInCollection=new mongoose.model("LogIn",LogInSchema)
module.exports=LogInCollection;