
var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + " : " + d.getMinutes() ;
var fullDate = date+' '+hours;
console.log(fullDate);

document.getElementsByName('hour').innerHTML += fullDate;
