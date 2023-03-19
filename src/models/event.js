const mongoose  =  require("mongoose"); 
const User = require("./user");
const moment = require("moment")

const eventSchema =  new mongoose.Schema({

  title:String , 
  notes:String , 
  date: Date,
  user: {type:mongoose.Schema.Types.ObjectId , ref:"User"}

} , {
    timestamps:true , 
})

eventSchema.method("check" , function(date){
    const diff= moment(this.date).diff(moment(date) ) ; 
   
    
    return moment.duration(diff).asSeconds() === 0 ;
}) 


eventSchema.static("sendNotif" , async function(){

  const events =  await Events.find()  ; 
const date =  new Date()
  return  events.filter((e)=>{

        return e.check(date) ; 
    })


})



const  Events =  mongoose.model("Event" , eventSchema);

module.exports = Events;