const mongoose =  require("mongoose")  ; 



const userSchema =  new mongoose.Schema({


    name:String  , 

  email:{type:String , unique:true}

} , {
    timestamps:true , toJSON:{
        transform(doc, ret){

           ret.id =  ret._id ;
           delete ret._id ; 
        }
    }
})



const User =  mongoose.model("User", userSchema);


module.exports =  User;