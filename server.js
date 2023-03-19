const mongoose = require("mongoose") ; 
const app  =  require("./src/app") ; 
const PORT= process.env.PORT || 3000;
const dotenv =require("dotenv/config") ;

const {hello,scheduler}   =  require("./src/utils/schedule");


(async()=>{



    const conn =  await mongoose.connect(process.env.MONGO_URI) ; 

console.log(conn.connection.host) ; 


app.listen(PORT  , ()=>{

hello();
scheduler()
    console.log("Server opened")
})




})()

// const moment =  require("moment") ; 
// const cron =  require("node-cron");
// // // const  now = moment();

// const thirtyminFromNow =  moment().add(1 ,"minutes") ; 

// console.log(thirtyminFromNow) 
// // const dif =   thirtyminFromNow.diff(moment()) ; 

// // console.log(dif)

// // const dur =  moment.duration(dif);

// // console.log(dur.asSeconds())



// // const daysBetween  =  nextMonth.diff(day); 
// // const dur = moment.duration(daysBetween);
// // console.log(nextMonth)
// // console.log(daysBetween);
// // console.log(dur.asSeconds())

// function calc(date){

// const value =  moment(date) ; 
// const now = moment(new Date()); ; 
 

// const diff=  value.diff(now) ; 
 
// const dur =  moment.duration(diff) ; 

// console.log(Math.floor(dur.asSeconds())); 
// if (Math.floor(dur.asSeconds()) <= 0) {
//   console.log("30 minutes is up");
// }

 
 

// }

// // console.log(cron.validate("* * * * * *"))

// cron.schedule("* * * * * *", function () {
//   calc(thirtyminFromNow)
// });