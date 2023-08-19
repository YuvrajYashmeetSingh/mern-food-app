const mongoose=require("mongoose");
const {Schema}=mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]

    },
    location:{
        type:String,
        required:[true,"location is required"]
    },
     email:{
        type:String,
        required:[true,"email is required"]
     },
     password:{
        type:String,
        requried:[true,"password is required"]
     },
     data:{
        type:Date,
        default : Date.now()
     }
})
module.exports  =mongoose.model('user',userSchema);
