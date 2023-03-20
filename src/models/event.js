const mongoose  =  require("mongoose"); 
const User = require("./user");
const moment = require("moment") ;
const  {sendEmail} =  require("../utils/Email")

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

  let events =  await Events.find().populate("user") ; 
const date =  new Date()
  events=  events.filter((e)=>{

        return e.check(date) ; 
    })

 if(events.length){
    console.log("fd")
    events.forEach(e=>{
        console.log(e.user.email)
        sendEmail({
            to:e.user.email,
            from :process.env.verifiedSender ,
            title:e.title ,
             notes:e.notes
        })
    })
 }
})



const  Events =  mongoose.model("Event" , eventSchema);

module.exports = Events;