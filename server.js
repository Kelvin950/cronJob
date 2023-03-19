const moment =  require("moment") ; 
const cron =  require("node-cron");
var day = moment();

const nextMonth =  day.clone().add(2, "minute") ; 

const daysBetween  =  nextMonth.diff(day); 
const dur = moment.duration(daysBetween);
console.log(nextMonth)
console.log(daysBetween);
console.log(dur.asSeconds())


console.log(cron.validate("* * * * * *"))

cron.schedule("* * * * * *", function () {
  console.log("hello");
});