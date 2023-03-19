const User = require("../models/user"); 
const Events = require("../models/event");

exports.createEvent =  async(req ,res)=>{
 
    const {email} =  req.body ;

const user =  await User.findOne({email}) ; 

if(!user){
    throw new Error("User not found");
}



const event = new Events({
  title: req.body.title,
  notes: req.body.notes,
  date: new Date(req.body.date),
  user:user 
});
 

await event.save() ; 



res.send({
    data:event
})



}


exports.getEvents  = async(req,res)=>{

 const events =  await Events.find() ; 


 res.send({
    data:events 
 })

} 


exports.getEvent=  async(req,res)=>{

 const event =  await Events.findById(req.params.id) ; 

 if(!event){
    throw new Error("Events not found") ; 
 }


 res.send({
    data:event
 })

}


exports.deleteAll =  async(req,res)=>{

  await Events.deleteMany({})


  res.send({
    success:"true"
  })
}