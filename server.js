const moment =  require("moment") ; 

var day = moment("2023-3-19" , "YYYY-MM-DD");

const nextMonth =  day.clone().add(1, "month") ; 

const daysBetween  =  nextMonth.diff(day, "days"); 
console.log(nextMonth)
console.log(daysBetween);