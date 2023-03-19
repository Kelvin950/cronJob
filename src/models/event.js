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
   
    if (Math.floor(moment.duration(diff).asSeconds()) === 0){
        Math.floor(moment.duration(diff).asSeconds());
        console.log(true)
        
    }
      return Math.floor(moment.duration(diff).asSeconds()) === 0;
}) 


eventSchema.static("sendNotif" , async function(){

  let events =  await Events.find()  ; 
const date =  new Date()
  events=  events.filter((e)=>{

        return e.check(date) ; 
    })

 if(events.length){
    console.log("fd")
 }
})



const  Events =  mongoose.model("Event" , eventSchema);

module.exports = Events;