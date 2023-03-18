const mongoose =  require("mongoose")  ; 



const userSchema =  new mongoose.Schema({


    name:String  , 
    password:String   ,


} , {
    timestamps:true , toJSON:{
        transform(doc, ret){

            delete ret.password
        }
    }
})



const User =  model("User", userSchema);


module.exports =  User;