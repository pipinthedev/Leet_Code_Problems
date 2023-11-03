var ok = new Date;
var year = ok.getFullYear();
var month = ok.getMonth();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day = ok.getDay();
var seconds = ok.getSeconds();
console.log("Today is : " + daylist[day] + ".");
console.log(day+' '+year+' '+month+ ' '+seconds);

if (year % 4 == 0) { 
    console.log("This year is leap year");
}
else 
{
  console.log("This year is Non leap year");
}