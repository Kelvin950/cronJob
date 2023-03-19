const moment =  require("moment") ; 
const cron =  require("node-cron");
// const  now = moment();

const thirtyminFromNow =  moment().add(30 ,"minutes") ; 

console.log(thirtyminFromNow) 
// const dif =   thirtyminFromNow.diff(moment()) ; 

// console.log(dif)

// const dur =  moment.duration(dif);

// console.log(dur.asSeconds())



// const daysBetween  =  nextMonth.diff(day); 
// const dur = moment.duration(daysBetween);
// console.log(nextMonth)
// console.log(daysBetween);
// console.log(dur.asSeconds())

function calc(date){

const value =  moment(date) ; 
const now = moment(new Date()); ; 
 

const diff=  value.diff(now) ; 
 
const dur =  moment.duration(diff) ; 

if(dur.asMinutes() <=0){
    console.log("30 minutes is up");
}
console.log(dur.asMinutes()) ; 
 
 

}

// console.log(cron.validate("* * * * * *"))

cron.schedule("* * * * * *", function () {
  calc(thirtyminFromNow)
});