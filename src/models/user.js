const mongoose =  require("mongoose")  ; 



const userSchema =  new mongoose.Schema({


    name:String  , 

  email:{type:String , unique:true}

} , {
    timestamps:true , toJSON:{
        transform(doc, ret){

            delete ret.password
        }
    }
})



const User =  model("User", userSchema);


module.exports =  User;