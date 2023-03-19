const mongoose  =  require("mongoose"); 
const User = require("./user");


const eventSchema =  new mongoose.Schema({

  title:String , 
  notes:String , 
  date: Date,
  user: {type:mongoose.Schema.Types.ObjectId , ref:"User"}

} , {
    timestamps:true , 
})




const  Events =  mongoose.model("Event" , eventSchema);

module.exports = Events;