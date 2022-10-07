let birthday = new Date("01-26-2003");
console.log(birthday.toLocaleString());

let momsBirthday = new Date("11-16-1977");
console.log(momsBirthday.toDateString());

let dadsBirthday = new Date(1965, 03, 27);
console.log(dadsBirthday.toLocaleDateString());

let millisec = Date.parse("May 1, 2022");
console.log(millisec);
let d = new Date(millisec);
console.log(d);

let date1 = new Date("January 15, 2022");
  let date2 = new Date();
  //milli sec/hr min/hr hrs
  let msec_per_day = 1000 * 60 * 60 * 24;
  
  let elapsedMilliseconds = date2.getTime() - date1.getTime();
  let dayDiff = elapsedMilliseconds / msec_per_day;
  let numDays = Math.round(dayDiff);
  console.log("The number of days between dates is " + numDays);

