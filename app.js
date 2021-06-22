
const d = new Date();
let date = d.getDate() + ' ' + (d.getMonth()+1) + " " + d.getFullYear();
let hours = d.getHours() + " : " + d.getMinutes() ;
let fullDate = date+' '+hours;

console.log(fullDate);

document.getElementsByName('hour').innerHTML += fullDate;
