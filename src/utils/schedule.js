const cron= require("node-cron") ; 
const Events = require("../models/event");

exports.hello = ()=>{
    console.log("dfd")
}

exports.scheduler = ()=>{
 

    cron.schedule("* * * * * *" , async function(){
    await Events.sendNotif();})
    
}