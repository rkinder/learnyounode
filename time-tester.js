var strftime = require("strftime")

var timeEDT = strftime.timezone('-0500')
console.log(timeEDT("%Y-%m-%d %H:%M"))

var myDate = new Date()
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());